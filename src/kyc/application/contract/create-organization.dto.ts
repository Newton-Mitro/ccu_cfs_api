import { Type } from 'class-transformer';
import {
  IsArray,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { BankAccountDTO } from './bank-account.dto';
import { ContactPersonDTO } from './contact-person.dto';
import { CreateCustomerDTO } from './create-customer.dto';

export class CreateOrganizationDTO extends CreateCustomerDTO {
  @IsString()
  @IsOptional()
  // @Expose({ name: 'parent_organization' })
  ParentOrganization: string;

  @IsString()
  @IsOptional()
  @IsPhoneNumber()
  // @Expose({ name: 'phone_number' })
  PhoneNumber: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'fax_number' })
  FaxNumber: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  // @Expose({ name: 'website' })
  Website: string;

  @Type(() => ContactPersonDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'contact_peoples' })
  ContactPeoples: ContactPersonDTO[];

  @Type(() => BankAccountDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'bank_accounts' })
  BankAccounts: BankAccountDTO[];
}
