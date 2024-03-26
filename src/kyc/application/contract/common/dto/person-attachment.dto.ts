import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class PersonAttachmentDTO {
  constructor(
    readonly attachmentId: string,
    readonly documentTitle: PersonalDocumentType,
    readonly fileUrl: string,
    readonly created_at: string,
    readonly updated_at: string,
    readonly created_by: string,
    readonly updated_by: string,
  ) {}
}
