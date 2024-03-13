import { IsBase64, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { OrganizationalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class CreateOrganizationAttachmentRequest {
  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'file_extension' })
  FileExtension: string;

  @IsString({ each: true })
  @IsEnum(OrganizationalDocumentType)
  // @Expose({ name: 'document_title' })
  DocumentTitle: OrganizationalDocumentType;

  @IsString()
  @IsNotEmpty()
  @IsBase64()
  // @Expose({ name: 'base64_document' })
  Base64Document: string;
}
