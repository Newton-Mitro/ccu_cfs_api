import { PersonalDocumentType } from '../../../shared/domain/enums/kyc-attachment-type.enum';

export type PersonAttachmentProps = {
  attachmentId: string;
  documentTitle: PersonalDocumentType;
  fileUrl: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export class PersonAttachmentModel {
  readonly attachmentId: string;
  readonly documentTitle: PersonalDocumentType;
  readonly fileUrl: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly createdBy: string;
  readonly updatedBy: string;

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
