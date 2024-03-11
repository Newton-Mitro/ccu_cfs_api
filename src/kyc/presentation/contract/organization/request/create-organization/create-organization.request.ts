import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { CreateAddressRequest } from '../../../common/request/create-address.request';
import { CreateBankAccountRequest } from './create-bank-account.request';
import { CreateContactPersonRequest } from './create-contact-person.request';
import { CreateOrganizationAttachmentRequest } from './create-organization-attachment.request';

export class CreateOrganizationRequest {
  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'name_en' })
  NameEn: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'name_bn' })
  NameBn: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'tin' })
  TIN: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'contact_number' })
  ContactNumber: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'mobile_number' })
  MobileNumber: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'phone_number' })
  PhoneNumber: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'fax_number' })
  Fax: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  // @Expose({ name: 'email' })
  Email: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  // @Expose({ name: 'website' })
  Website: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'parent_organization' })
  ParentOrganization: string;

  @Type(() => CreateOrganizationAttachmentRequest)
  @IsOptional()
  @ValidateNested()
  // @Expose({ name: 'logo' })
  Logo: CreateOrganizationAttachmentRequest;

  @Type(() => CreateAddressRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'addresses' })
  Addresses: CreateAddressRequest[];

  @Type(() => CreateContactPersonRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'contact_peoples' })
  ContactPeoples: CreateContactPersonRequest[];

  @Type(() => CreateBankAccountRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'bank_accounts' })
  BankAccounts: CreateBankAccountRequest[];

  @Type(() => CreateOrganizationAttachmentRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'attachments' })
  Attachments: CreateOrganizationAttachmentRequest[];
}
