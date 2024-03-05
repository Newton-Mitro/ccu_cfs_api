import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AddressDTO } from './address.dto';
import { CreateKycAttachmentDTO } from './create-kyc-attachment.dto';

export class CreateCustomerDTO {
  @IsString()
  @IsNotEmpty()
  identificationNumber: string;

  @IsString()
  @IsNotEmpty()
  nameEn: string;

  @IsString()
  @IsOptional()
  nameBn: string;

  @IsString()
  registeredEmail: string;

  @IsString()
  @IsOptional()
  alternateEmail: string;

  @IsString()
  registeredMobile: string;

  @IsString()
  @IsOptional()
  alternateContactNumber: string;

  @IsString()
  @IsOptional()
  emergencyContactNumber: string;

  @Type(() => AddressDTO)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  addresses: AddressDTO[];

  @Type(() => CreateKycAttachmentDTO)
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  attachments: CreateKycAttachmentDTO[];
}
