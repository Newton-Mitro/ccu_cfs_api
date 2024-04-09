import { IsBase64, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddOrganizationAttachmentRequest {
  @IsString()
  @IsNotEmpty()
  file_extension: string;

  @IsString()
  @IsOptional()
  document_title: string;

  @IsString()
  @IsNotEmpty()
  @IsBase64()
  base64_document: string;
}
