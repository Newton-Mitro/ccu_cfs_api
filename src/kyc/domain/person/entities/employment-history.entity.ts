import { BaseEntity } from 'src/common/entities/base-entity';

export class EmploymentHistoryModel extends BaseEntity {
  private _OrganizationName: string;
  private _Position: string;
  private _Address: string;
  private _SupervisorName: string;
  private _SupervisorDesignation: string;
  private _SupervisorPhone: string;
  private _JobResponsibilities: string;
  private _Salary: number;
  private _StartDate: string;
  private _EndDate: string;
  private _TillNow: boolean;

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
    startDate: string,
    endDate: string,
    tillNow: boolean,
  ) {
    super(educationHistoryId);
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
  }

  public get OrganizationName(): string {
    return this._OrganizationName;
  }

  public set OrganizationName(value: string) {
    this._OrganizationName = value;
  }

  public get Position(): string {
    return this._Position;
  }

  public set Position(value: string) {
    this._Position = value;
  }

  public get Address(): string {
    return this._Address;
  }

  public set Address(value: string) {
    this._Address = value;
  }

  public get SupervisorName(): string {
    return this._SupervisorName;
  }

  public set SupervisorName(value: string) {
    this._SupervisorName = value;
  }

  public get SupervisorDesignation(): string {
    return this._SupervisorDesignation;
  }

  public set SupervisorDesignation(value: string) {
    this._SupervisorDesignation = value;
  }

  public get SupervisorPhone(): string {
    return this._SupervisorPhone;
  }

  public set SupervisorPhone(value: string) {
    this._SupervisorPhone = value;
  }

  public get JobResponsibilities(): string {
    return this._JobResponsibilities;
  }

  public set JobResponsibilities(value: string) {
    this._JobResponsibilities = value;
  }

  public get Salary(): number {
    return this._Salary;
  }

  public set Salary(value: number) {
    this._Salary = value;
  }

  public get StartDate(): string {
    return this._StartDate;
  }

  public set StartDate(value: string) {
    this._StartDate = value;
  }

  public get EndDate(): string {
    return this._EndDate;
  }

  public set EndDate(value: string) {
    this._EndDate = value;
  }

  public get TillNow(): boolean {
    return this._TillNow;
  }

  public set TillNow(value: boolean) {
    this._TillNow = value;
  }
}
