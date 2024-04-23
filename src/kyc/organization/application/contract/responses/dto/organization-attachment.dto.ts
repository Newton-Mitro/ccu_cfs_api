import { AuthUserType } from '../../../../../../common/types/auth-user.type';
import { OrganizationalDocumentType } from '../../../../../shared/domain/enums/kyc-attachment-type.enum';

export class OrganizationAttachmentDTO {
  constructor(
    readonly attachment_id: string,
    readonly document_title: OrganizationalDocumentType,
    readonly file_url: string,
    readonly created_at: string,
    readonly updated_at: string,
    readonly created_by: AuthUserType | null,
    readonly updated_by: AuthUserType | null,
  ) {}
}
