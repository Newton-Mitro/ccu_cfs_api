import { BaseEntity } from 'src/common/entities/base-entity';
import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class PersonAttachmentEntity extends BaseEntity {
  DocumentTitle: PersonalDocumentType;
  Base64Document: string;
  FileExtension: string;
}
