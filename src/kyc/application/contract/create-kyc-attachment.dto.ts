import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { KYCAttachmentType } from 'src/kyc/domain/enum/kyc-attachment-type.enum';

export class CreateKycAttachmentDTO {
  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'document_extension' })
  DocumentExtension: string;

  @IsString({ each: true })
  @IsEnum(KYCAttachmentType)
  // @Expose({ name: 'document_title' })
  DocumentTitle: KYCAttachmentType;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'base64_string_document' })
  Base64StringDocument: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'created_by' })
  CreatedBy: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'update_by' })
  UpdatedBy: string;
}
