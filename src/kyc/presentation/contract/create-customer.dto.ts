import { Type } from 'class-transformer';
import {
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
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  contactNumber: string;

  @Type(() => AddressDTO)
  @IsArray()
  @ValidateNested({ each: true })
  addresses: AddressDTO[];

  @Type(() => CreateKycAttachmentDTO)
  @IsArray()
  @ValidateNested({ each: true })
  attachments: CreateKycAttachmentDTO[];
}
