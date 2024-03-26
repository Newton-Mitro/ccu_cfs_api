import { IsBase64, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddPersonPhotoRequest {
  @IsString()
  @IsNotEmpty()
  file_extension: string;

  @IsString({ each: true })
  @IsOptional()
  document_title: string;

  @IsString()
  @IsNotEmpty()
  @IsBase64()
  base64_document: string;
}
