import { AuthUserType } from '../../../../../../common/domain/types/auth-user.type';

export class BranchDTO {
  constructor(
    readonly branch_id: string,
    readonly organization_id: string,
    readonly identification_number: string,
    readonly registration_number: string,
    readonly tin: string,
    readonly name_en: string,
    readonly name_bn: string,
    readonly email: string,
    readonly contact_number: string,
    readonly mobile_number: string,
    readonly phone_number: string,
    readonly fax: string,
    readonly website: string,
    readonly logo: string,
    readonly created_at: string,
    readonly updated_at: string,
    readonly created_by: AuthUserType | null,
    readonly updated_by: AuthUserType | null,
  ) {}
}
