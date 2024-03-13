import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class PersonAttachmentResponse {
  // @Expose({ name: 'attachment_id' })
  AttachmentId: string;

  // @Expose({ name: 'document_title' })
  DocumentTitle: PersonalDocumentType;

  // @Expose({ name: 'file_extension' })
  FileExtension: string;

  // @Expose({ name: 'document_url' })
  Base64Document: string;
}
