import { AuthUserType } from '../../../../../../common/domain/types/auth-user.type';
import { PersonalDocumentType } from '../../../../domain/enums/kyc-attachment-type.enum';

export class PersonAttachmentDTO {
  constructor(
    readonly attachmentId: string,
    readonly documentTitle: PersonalDocumentType,
    readonly fileUrl: string,
    readonly created_at: string,
    readonly updated_at: string,
    readonly created_by: AuthUserType | null,
    readonly updated_by: AuthUserType | null,
  ) {}
}
