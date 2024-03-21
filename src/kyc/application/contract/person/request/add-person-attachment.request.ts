import { IsBase64, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class AddPersonAttachmentRequest {
  @IsString()
  @IsNotEmpty()
  fileExtension: string;

  @IsString({ each: true })
  @IsEnum(PersonalDocumentType)
  documentTitle: PersonalDocumentType;

  @IsString()
  @IsNotEmpty()
  @IsBase64()
  base64Document: string;
}
