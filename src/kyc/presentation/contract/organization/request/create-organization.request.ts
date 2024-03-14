import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { AddOrganizationAttachmentRequest } from './add-organization-attachment.request';

export class CreateOrganizationRequest {
  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'registration_number' })
  RegistrationNumber: string;

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

  @Type(() => AddOrganizationAttachmentRequest)
  @IsOptional()
  @ValidateNested()
  // @Expose({ name: 'logo' })
  Logo: AddOrganizationAttachmentRequest;
}
