import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class PersonAttachment {
  constructor(
    readonly attachmentId: string,
    readonly documentTitle: PersonalDocumentType,
    readonly fileUrl: string,
  ) {}
}
