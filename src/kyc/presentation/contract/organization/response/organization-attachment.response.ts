import { OrganizationalDocumentType } from 'src/kyc/domain/common/enums/kyc-attachment-type.enum';

export class OrganizationAttachmentResponse {
  // @Expose({ name: 'attachment_id' })
  AttachmentId: string;

  // @Expose({ name: 'document_title' })
  DocumentTitle: OrganizationalDocumentType;

  // @Expose({ name: 'document_url' })
  DocumentUrl: string;
}
