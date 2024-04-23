import { LinkObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { AuthUserType } from '../../../../../../common/types/auth-user.type';

export class EmploymentHistoryDTO {
  constructor(
    readonly employment_history_id: string,
    readonly organization_name: string,
    readonly position: string,
    readonly address: string,
    readonly supervisor_name: string,
    readonly supervisor_designation: string,
    readonly supervisor_phone: string,
    readonly job_responsibilities: string,
    readonly salary: number,
    readonly start_date: Date,
    readonly end_date: Date,
    readonly till_now: boolean,
    readonly created_at: string,
    readonly updated_at: string,
    readonly created_by: AuthUserType | null,
    readonly updated_by: AuthUserType | null,
    readonly links?: LinkObject[],
  ) {}
}
