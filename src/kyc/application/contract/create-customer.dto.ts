import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
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
  // @Expose({ name: 'name_en' })
  NameEn: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'name_bn' })
  NameBn: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  // @Expose({ name: 'email' })
  Email: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'contact_number' })
  ContactNumber: string;

  @Type(() => AddressDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'addresses' })
  Addresses: AddressDTO[];

  @Type(() => CreateKycAttachmentDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'attachments' })
  Attachments: CreateKycAttachmentDTO[];
}
