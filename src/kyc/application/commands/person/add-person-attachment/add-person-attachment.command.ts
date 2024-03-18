import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class AddPersonAttachmentCommand {
  constructor(
    public readonly fileExtension: string,
    public readonly documentTitle: PersonalDocumentType,
    public readonly base64Document: string,
  ) {}
}
