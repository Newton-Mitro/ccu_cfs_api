import { AttachmentType } from '../enum/attachment-type.enum';

export class KycAttachmentModel {
  attachmentType: AttachmentType;
  fileReference: {
    id: '';
    fileUrl: '';
  };
}
