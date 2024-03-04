import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BankAccountDTO } from './bank-account.dto';
import { ContactPersonDTO } from './contact-person.dto';
import { CreateCustomerDTO } from './create-customer.dto';

export class CreateOrganizationDTO extends CreateCustomerDTO {
  @IsString()
  parentOrganization: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  faxNumber: string;

  @IsString()
  website: string;

  @IsBoolean()
  bankrupt: boolean;

  @IsArray()
  branches: string[];

  @Type(() => ContactPersonDTO)
  @IsArray()
  @ValidateNested({ each: true })
  contactPeoples: ContactPersonDTO[];

  @Type(() => BankAccountDTO)
  @IsArray()
  @ValidateNested({ each: true })
  bankAccounts: BankAccountDTO[];
}
