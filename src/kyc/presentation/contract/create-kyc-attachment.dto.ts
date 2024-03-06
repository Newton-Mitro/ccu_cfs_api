import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { KYCAttachmentType } from 'src/kyc/domain/enum/kyc-attachment-type.enum';

export class CreateKycAttachmentDTO {
  @IsString()
  @IsNotEmpty()
  documentExtension: string;

  @IsString({ each: true })
  @IsEnum(KYCAttachmentType)
  documentTitle: KYCAttachmentType;

  @IsString()
  @IsNotEmpty()
  base64StringDocument: string;

  @IsString()
  @IsOptional()
  createdBy: string;

  @IsString()
  @IsOptional()
  updatedBy: string;
}
