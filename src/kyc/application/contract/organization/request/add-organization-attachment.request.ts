import { IsBase64, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { OrganizationalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class AddOrganizationAttachmentRequest {
  @IsString()
  @IsNotEmpty()
  fileExtension: string;

  @IsString({ each: true })
  @IsEnum(OrganizationalDocumentType)
  documentTitle: OrganizationalDocumentType;

  @IsString()
  @IsNotEmpty()
  @IsBase64()
  base64Document: string;
}
