export type EmploymentHistoryProps = {
  employmentHistoryId: string;
  organizationName: string;
  position: string;
  address: string;
  supervisorName: string;
  supervisorDesignation: string;
  supervisorPhone: string;
  jobResponsibilities: string;
  salary: number;
  startDate: Date;
  endDate: Date;
  tillNow: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export class EmploymentHistoryModel {
  readonly employmentHistoryId: string;
  readonly organizationName: string;
  readonly position: string;
  readonly address: string;
  readonly supervisorName: string;
  readonly supervisorDesignation: string;
  readonly supervisorPhone: string;
  readonly jobResponsibilities: string;
  readonly salary: number;
  readonly startDate: Date;
  readonly endDate: Date;
  readonly tillNow: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly createdBy: string;
  readonly updatedBy: string;

  constructor(employmentHistoryProps: EmploymentHistoryProps) {
    this.employmentHistoryId = employmentHistoryProps.employmentHistoryId;
    this.organizationName = employmentHistoryProps.organizationName;
    this.position = employmentHistoryProps.position;
    this.address = employmentHistoryProps.address;
    this.supervisorName = employmentHistoryProps.supervisorName;
    this.supervisorDesignation = employmentHistoryProps.supervisorDesignation;
    this.supervisorPhone = employmentHistoryProps.supervisorPhone;
    this.jobResponsibilities = employmentHistoryProps.jobResponsibilities;
    this.salary = employmentHistoryProps.salary;
    this.startDate = employmentHistoryProps.startDate;
    this.endDate = employmentHistoryProps.endDate;
    this.tillNow = employmentHistoryProps.tillNow;
    this.createdAt = employmentHistoryProps.createdAt;
    this.updatedAt = employmentHistoryProps.updatedAt;
    this.createdBy = employmentHistoryProps.createdBy;
    this.updatedBy = employmentHistoryProps.updatedBy;
  }
}
