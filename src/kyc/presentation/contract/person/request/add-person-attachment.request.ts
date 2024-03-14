import { IsBase64, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class AddPersonAttachmentRequest {
  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'file_extension' })
  FileExtension: string;

  @IsString({ each: true })
  @IsEnum(PersonalDocumentType)
  // @Expose({ name: 'document_title' })
  DocumentTitle: PersonalDocumentType;

  @IsString()
  @IsNotEmpty()
  @IsBase64()
  // @Expose({ name: 'base64_document' })
  Base64Document: string;
}
