import { OrganizationalDocumentType } from '../../../shared/domain/enums/kyc-attachment-type.enum';

export type OrganizationAttachmentProps = {
  attachmentId: string;
  documentTitle: OrganizationalDocumentType;
  fileUrl: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};
