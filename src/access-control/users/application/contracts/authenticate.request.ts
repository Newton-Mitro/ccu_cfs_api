import { IsNotEmpty, IsString } from 'class-validator';

export class AuthenticateRequest {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
