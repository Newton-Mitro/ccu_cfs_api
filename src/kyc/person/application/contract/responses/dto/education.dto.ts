import { LinkObject } from '../../../../../../common/contract/link-object';
import { AuthUserType } from '../../../../../../common/types/auth-user.type';

export class EducationDTO {
  constructor(
    readonly education_id: string,
    readonly education_level: string,
    readonly education_degree: string,
    readonly institute_name: string,
    readonly major_subject: string,
    readonly passing_year: string,
    readonly grade: string,
    readonly created_at: string,
    readonly updated_at: string,
    readonly created_by: AuthUserType | null,
    readonly updated_by: AuthUserType | null,
    readonly links?: LinkObject[],
  ) {}
}
