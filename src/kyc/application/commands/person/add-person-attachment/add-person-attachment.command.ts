import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class AddPersonAttachmentCommand {
  constructor(
    public readonly fileExtension: string,
    public readonly documentTitle: PersonalDocumentType,
    public readonly base64Document: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly createdBy: string,
    public readonly updatedBy: string,
  ) {}
}
