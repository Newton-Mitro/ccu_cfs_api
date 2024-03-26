import { IsBase64, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class AddPersonAttachmentRequest {
  @IsString()
  @IsNotEmpty()
  person_id: string;

  @IsString()
  @IsNotEmpty()
  file_extension: string;

  @IsString({ each: true })
  @IsEnum(PersonalDocumentType)
  document_title: PersonalDocumentType;

  @IsString()
  @IsNotEmpty()
  @IsBase64()
  base64_document: string;
}
