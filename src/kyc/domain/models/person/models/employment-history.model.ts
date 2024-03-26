export class EmploymentHistoryModel {
  private _EmploymentHistoryId: string;
  private _OrganizationName: string;
  private _Position: string;
  private _Address: string;
  private _SupervisorName: string;
  private _SupervisorDesignation: string;
  private _SupervisorPhone: string;
  private _JobResponsibilities: string;
  private _Salary: number;
  private _StartDate: Date;
  private _EndDate: Date;
  private _TillNow: boolean;
  private _CreatedAt: Date;
  private _UpdatedAt: Date;
  private _CreatedBy: string;
  private _UpdatedBy: string;

  constructor(
    educationHistoryId: string,
    organizationName: string,
    position: string,
    address: string,
    supervisorName: string,
    supervisorDesignation: string,
    supervisorPhone: string,
    jobResponsibilities: string,
    salary: number,
    startDate: Date,
    endDate: Date,
    tillNow: boolean,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    this._EmploymentHistoryId = educationHistoryId;
    this._OrganizationName = organizationName;
    this._Position = position;
    this._Address = address;
    this._SupervisorName = supervisorName;
    this._SupervisorDesignation = supervisorDesignation;
    this._SupervisorPhone = supervisorPhone;
    this._JobResponsibilities = jobResponsibilities;
    this._Salary = salary;
    this._StartDate = startDate;
    this._EndDate = endDate;
    this._TillNow = tillNow;
    this._CreatedAt = createdAt;
    this._UpdatedAt = updatedAt;
    this._CreatedBy = createdBy;
    this._UpdatedBy = updatedBy;
  }

  public get EmploymentHistoryId(): string {
    return this._EmploymentHistoryId;
  }

  public get OrganizationName(): string {
    return this._OrganizationName;
  }

  public get Position(): string {
    return this._Position;
  }

  public get Address(): string {
    return this._Address;
  }

  public get SupervisorName(): string {
    return this._SupervisorName;
  }

  public get SupervisorDesignation(): string {
    return this._SupervisorDesignation;
  }

  public get SupervisorPhone(): string {
    return this._SupervisorPhone;
  }

  public get JobResponsibilities(): string {
    return this._JobResponsibilities;
  }

  public get Salary(): number {
    return this._Salary;
  }

  public get StartDate(): Date {
    return this._StartDate;
  }

  public get EndDate(): Date {
    return this._EndDate;
  }

  public get TillNow(): boolean {
    return this._TillNow;
  }

  public get CreatedAt(): Date {
    return this._CreatedAt;
  }

  public get UpdatedAt(): Date {
    return this._UpdatedAt;
  }

  public get CreatedBy(): string {
    return this._CreatedBy;
  }

  public get UpdatedBy(): string {
    return this._UpdatedBy;
  }
}
