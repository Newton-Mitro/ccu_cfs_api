import { AuthUserType } from '../../../../common/types/auth-user.type';
import { PersonalDocumentType } from '../../../shared/domain/enums/kyc-attachment-type.enum';
import { PersonAttachmentProps } from '../types/person-attachment-props';

export class PersonAttachmentModel {
  readonly attachmentId: string;
  readonly documentTitle: PersonalDocumentType;
  readonly fileUrl: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly createdBy: AuthUserType | null;
  readonly updatedBy: AuthUserType | null;

  constructor(personAttachmentProps: PersonAttachmentProps) {
    this.attachmentId = personAttachmentProps.attachmentId;
    this.documentTitle = personAttachmentProps.documentTitle;
    this.fileUrl = personAttachmentProps.fileUrl;
    this.createdAt = personAttachmentProps.createdAt;
    this.updatedAt = personAttachmentProps.updatedAt;
    this.createdBy = personAttachmentProps.createdBy;
    this.updatedBy = personAttachmentProps.updatedBy;
  }
}
