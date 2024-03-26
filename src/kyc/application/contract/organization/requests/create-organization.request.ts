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
  registration_number: string;

  @IsString()
  @IsNotEmpty()
  name_en: string;

  @IsString()
  @IsOptional()
  name_bn: string;

  @IsString()
  @IsOptional()
  tin: string;

  @IsString()
  @IsOptional()
  contact_number: string;

  @IsString()
  @IsOptional()
  mobile_number: string;

  @IsString()
  @IsOptional()
  phone_number: string;

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
