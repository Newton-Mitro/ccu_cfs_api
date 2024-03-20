import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticateRequest } from 'src/users/application/contracts/authenticate.request';
import { CreateUserRequest } from 'src/users/application/contracts/create-user.request';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
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
    return this.authService.login(authenticateRequest);
  }

  // @UseGuards(PermissionGuard)
  // @HasPermissions(Permission.AddEducation)
  @Get('user')
  async getAuthenticatedUser(@Req() req) {
    const { permissions, ...rest } = req.user;
    return req.user;
  }

  @Get('logout')
  async logout(@Req() req: Request) {
    if (req.user) this.authService.logout(req.user['sub']);
  }
}
