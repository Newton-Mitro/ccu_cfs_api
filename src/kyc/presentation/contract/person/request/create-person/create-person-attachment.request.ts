import { IsBase64, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PersonalDocumentType } from 'src/kyc/domain/common/enums/kyc-attachment-type.enum';

export class CreatePersonAttachmentRequest {
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
  // @Expose({ name: 'base64_string_document' })
  Base64StringDocument: string;
}
