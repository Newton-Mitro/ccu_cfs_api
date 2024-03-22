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
  registrationNumber: string;

  @IsString()
  @IsNotEmpty()
  nameEn: string;

  @IsString()
  @IsOptional()
  nameBn: string;

  @IsString()
  @IsOptional()
  tin: string;

  @IsString()
  @IsOptional()
  contactNumber: string;

  @IsString()
  @IsOptional()
  mobileNumber: string;

  @IsString()
  @IsOptional()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  fax: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  website: string;

  @Type(() => AddOrganizationAttachmentRequest)
  @IsOptional()
  @ValidateNested()
  logo: AddOrganizationAttachmentRequest;
}
