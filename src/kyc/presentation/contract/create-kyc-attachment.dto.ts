import { IsEnum, IsString } from 'class-validator';
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
  documentUrl: string;

  @IsString()
  base64StringDocument: string;

  @IsString()
  createdBy: string;

  @IsString()
  updatedBy: string;
}
