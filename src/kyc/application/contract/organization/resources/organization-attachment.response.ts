import { OrganizationalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class OrganizationAttachmentResponse {
  attachmentId: string;
  documentTitle: OrganizationalDocumentType;
  fileUrl: string;
}
