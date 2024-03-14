import { OrganizationalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class OrganizationAttachmentResponse {
  // @Expose({ name: 'attachment_id' })
  AttachmentId: string;

  // @Expose({ name: 'document_title' })
  DocumentTitle: OrganizationalDocumentType;

  // @Expose({ name: 'file_url' })
  FileUrl: string;
}
