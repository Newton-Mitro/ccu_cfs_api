import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddBankAccountRequest {
  @IsString()
  @IsNotEmpty()
  bankName: string;

  @IsString()
  @IsNotEmpty()
  branch: string;

  @IsString()
  @IsOptional()
  routingNumber: string;

  @IsString()
  @IsNotEmpty()
  accountNumber: string;

  @IsString()
  @IsOptional()
  accountName: string;
}
