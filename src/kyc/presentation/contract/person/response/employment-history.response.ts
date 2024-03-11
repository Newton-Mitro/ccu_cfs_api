export class EmploymentHistoryResponse {
  // @Expose({ name: 'employment_history_id' })
  EmploymentHistoryId: string;

  // @Expose({ name: 'organization_name' })
  OrganizationName: string;

  // @Expose({ name: 'position' })
  Position: string;

  // @Expose({ name: 'address' })
  Address: string;

  // @Expose({ name: 'supervisor_name' })
  SupervisorName: string;

  // @Expose({ name: 'supervisor_designation' })
  SupervisorDesignation: string;

  // @Expose({ name: 'supervisor_phone' })
  SupervisorPhone: string;

  // @Expose({ name: 'job_responsibilities' })
  JobResponsibilities: string;

  // @Expose({ name: 'salary' })
  Salary: number;

  // @Expose({ name: 'start_date' })
  StartDate: Date;

  // @Expose({ name: 'end_date' })
  EndDate: Date;

  // @Expose({ name: 'till_now' })
  TillNow: boolean;
}
