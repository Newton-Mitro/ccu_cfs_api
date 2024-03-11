import { PersonalDocumentType } from 'src/kyc/domain/common/enums/kyc-attachment-type.enum';

export class PersonAttachmentResponse {
  // @Expose({ name: 'attachment_id' })
  AttachmentId: string;

  // @Expose({ name: 'document_title' })
  DocumentTitle: PersonalDocumentType;

  // @Expose({ name: 'base64_string_document' })
  DocumentUrl: string;
}
