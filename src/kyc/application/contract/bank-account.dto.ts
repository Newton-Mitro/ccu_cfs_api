import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class BankAccountDTO {
  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'bank_name' })
  BankName: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'branch' })
  Branch: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'routing_number' })
  RoutingNumber: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'account_number' })
  AccountNumber: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'account_name' })
  AccountName: string;
}
