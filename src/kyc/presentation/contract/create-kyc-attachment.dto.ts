import { IsEnum, IsOptional, IsString } from 'class-validator';
import { FileExtension } from 'src/kyc/domain/enum/file-extension.enum';
import { KYCAttachmentType } from 'src/kyc/domain/enum/kyc-attachment-type.enum';

export class CreateKycAttachmentDTO {
  @IsString({ each: true })
  @IsEnum(FileExtension)
  documentExtension: FileExtension;

  @IsString({ each: true })
  @IsEnum(KYCAttachmentType)
  documentTitle: KYCAttachmentType;

  @IsString()
  @IsOptional()
  documentUrl: string;

  @IsString()
  @IsOptional()
  base64StringDocument: string;

  @IsString()
  @IsOptional()
  createdBy: string;

  @IsString()
  @IsOptional()
  updatedBy: string;
}
