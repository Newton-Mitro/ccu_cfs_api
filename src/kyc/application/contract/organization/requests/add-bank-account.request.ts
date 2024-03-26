import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddBankAccountRequest {
  @IsString()
  @IsNotEmpty()
  organization_id: string;

  @IsString()
  @IsNotEmpty()
  bank_name: string;

  @IsString()
  @IsNotEmpty()
  branch: string;

  @IsString()
  @IsOptional()
  routing_number: string;

  @IsString()
  @IsNotEmpty()
  account_number: string;

  @IsString()
  @IsOptional()
  account_name: string;
}
