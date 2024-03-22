import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { AuthenticateRequest } from '../users/application/contracts/request/authenticate.request';
import { CreateUserRequest } from '../users/application/contracts/request/create-user.request';
import { UsersService } from '../users/application/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (!user) throw new BadRequestException('User does not exist');
    const passwordMatches = await argon2.verify(user.password, pass);
    if (passwordMatches) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async signIn(authenticateRequest: AuthenticateRequest) {
    // Check if user exists
    const user = await this.usersService.findByUsername(
      authenticateRequest.username,
    );
    if (!user) throw new BadRequestException('User does not exist');
    const passwordMatches = await argon2.verify(
      user.password,
      authenticateRequest.password,
    );
    if (!passwordMatches)
      throw new BadRequestException('Password is incorrect');

    const tokens = await this.getTokens(
      user._id,
      user.username,
      user.roles,
      user.permissions,
      user.userSecret,
    );
    await this.updateRefreshToken(user._id, tokens.refreshToken);
    return tokens;
  }

  async signUp(createUserRequest: CreateUserRequest): Promise<any> {
    // Check if user exists
    const userExists = await this.usersService.findByUsername(
      createUserRequest.username,
    );
    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    // Hash password
    const hash = await this.hashData(createUserRequest.password);
    const newUser = await this.usersService.create({
      ...createUserRequest,
      password: hash,
    });
    const tokens = await this.getTokens(
      newUser._id,
      newUser.username,
      newUser.roles,
      newUser.permissions,
      newUser.userSecret,
    );
    await this.updateRefreshToken(newUser._id, tokens.refreshToken);
    return tokens;
  }

  async logout(userId: string) {
    return this.usersService.updateRefreshToken(userId, {
      refreshToken: null,
      userSecret: Date.now().toString(),
    });
  }

  hashData(data: string) {
    return argon2.hash(data);
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await this.hashData(refreshToken);
    await this.usersService.updateRefreshToken(userId, {
      refreshToken: hashedRefreshToken,
      userSecret: Date.now().toString(),
    });
  }

  async getTokens(
    id: string,
    username: string,
    roles: string[],
    permissions: string[],
    userSecret: string,
  ) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          id: id,
          username,
          roles,
          permissions,
          userSecret,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '1m',
        },
      ),
      this.jwtService.signAsync(
        {
          id: id,
          username,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshTokens(userId: string, refreshToken: string) {
    const user = await this.usersService.findById(userId);
    if (!user || !user.refreshToken)
      throw new ForbiddenException('Access Denied');
    const refreshTokenMatches = await argon2.verify(
      user.refreshToken,
      refreshToken,
    );
    if (!refreshTokenMatches) throw new ForbiddenException('Access Denied');
    const tokens = await this.getTokens(
      user.id,
      user.username,
      user.roles,
      user.permissions,
      user.userSecret,
    );
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }
}
