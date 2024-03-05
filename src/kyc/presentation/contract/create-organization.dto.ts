import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { BankAccountDTO } from './bank-account.dto';
import { ContactPersonDTO } from './contact-person.dto';
import { CreateCustomerDTO } from './create-customer.dto';

export class CreateOrganizationDTO extends CreateCustomerDTO {
  @IsString()
  @IsOptional()
  parentOrganization: string;

  @IsString()
  @IsOptional()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  faxNumber: string;

  @IsString()
  @IsOptional()
  website: string;

  @Type(() => ContactPersonDTO)
  @IsArray()
  @ValidateNested({ each: true })
  contactPeoples: ContactPersonDTO[];

  @Type(() => BankAccountDTO)
  @IsArray()
  @ValidateNested({ each: true })
  bankAccounts: BankAccountDTO[];
}
