import { AuthUserType } from '../../../../common/domain/types/auth-user.type';
import { OrganizationalDocumentType } from '../../../shared/domain/enums/kyc-attachment-type.enum';

export type OrganizationAttachmentProps = {
  attachmentId: string;
  documentTitle: OrganizationalDocumentType;
  fileUrl: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: AuthUserType | null;
  updatedBy: AuthUserType | null;
};
