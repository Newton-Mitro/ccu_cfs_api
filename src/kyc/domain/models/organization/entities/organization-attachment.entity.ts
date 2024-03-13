import { BaseEntity } from 'src/common/entities/base-entity';
import { OrganizationalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class OrganizationAttachmentEntity extends BaseEntity {
  DocumentTitle: OrganizationalDocumentType;
  Base64Document: string;
  FileExtension: string;
}
