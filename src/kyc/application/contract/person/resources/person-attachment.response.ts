import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class PersonAttachmentResponse {
  attachmentId: string;
  documentTitle: PersonalDocumentType;
  fileUrl: string;
}
