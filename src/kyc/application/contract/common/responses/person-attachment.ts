import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class PersonAttachment {
  attachmentId: string;
  documentTitle: PersonalDocumentType;
  fileUrl: string;
}
