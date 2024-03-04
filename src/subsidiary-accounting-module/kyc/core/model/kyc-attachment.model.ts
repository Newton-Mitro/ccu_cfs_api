import { AttachmentType } from '../enum/attachment-type.enum';
import { FileExtension } from '../enum/file-extension.enum';

export class KycAttachmentModel {
  attachmentType: AttachmentType;
  fileExtension: FileExtension;
  fileContent: string;
}
