import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticateRequest } from '../users/application/contracts/requests/authenticate.request';
import { CreateUserRequest } from '../users/application/contracts/requests/create-user.request';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { Public } from './util/public.decorator';

@UseGuards(JwtAuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('signup')
  signup(@Body() createUserRequest: CreateUserRequest) {
    return this.authService.signUp(createUserRequest);
  }

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('login')
  async login(@Body() authenticateRequest: AuthenticateRequest) {
    return this.authService.signIn(authenticateRequest);
  }

  // @HasPermissions(Permission.AddEducation)
  @Get('user')
  async getAuthenticatedUser(@Req() req) {
    const { permissions, ...rest } = req.user;
    return req.user;
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Req() req: Request) {
    const userId = req.user ? req.user['id'] : null;
    const refreshToken = req.user ? req.user['refreshToken'] : null;
    return this.authService.refreshTokens(userId, refreshToken);
  }

  @Get('logout')
  async logout(@Req() req: Request) {
    if (req.user) this.authService.logout(req.user['id']);
  }
}
