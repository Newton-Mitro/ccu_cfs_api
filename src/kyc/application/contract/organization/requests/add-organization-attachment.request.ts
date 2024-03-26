import { IsBase64, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { OrganizationalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class AddOrganizationAttachmentRequest {
  @IsString()
  @IsNotEmpty()
  organization_id: string;

  @IsString()
  @IsNotEmpty()
  file_extension: string;

  @IsString({ each: true })
  @IsEnum(OrganizationalDocumentType)
  document_title: OrganizationalDocumentType;

  @IsString()
  @IsNotEmpty()
  @IsBase64()
  base64_document: string;
}
