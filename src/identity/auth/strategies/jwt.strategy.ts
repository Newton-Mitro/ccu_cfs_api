import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../types/jwt-payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_ACCESS_SECRET,
      issuer: 'dentonstudio.com',
      audience: 'yoursite.com',
    });
  }

  async validate(payload: JwtPayload) {
    return {
      id: payload.id,
      name: payload.name,
      username: payload.username,
      roles: payload.roles,
      permissions: payload.permissions,
      userSecret: payload.userSecret,
    };
  }
}
