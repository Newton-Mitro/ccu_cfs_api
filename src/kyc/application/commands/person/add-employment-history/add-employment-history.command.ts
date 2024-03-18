export class AddEmploymentHistoryCommand {
  constructor(
    public readonly organizationName: string,
    public readonly position: string,
    public readonly address: string,
    public readonly supervisorName: string,
    public readonly supervisorDesignation: string,
    public readonly supervisorPhone: string,
    public readonly jobResponsibilities: string,
    public readonly salary: number,
    public readonly startDate: Date,
    public readonly endDate: Date,
    public readonly tillNow: boolean,
  ) {}
}
