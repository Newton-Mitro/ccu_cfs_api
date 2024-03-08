export class EmploymentHistoryEntity {
  private _OrganizationName: string;
  public get OrganizationName(): string {
    return this._OrganizationName;
  }
  public set OrganizationName(value: string) {
    this._OrganizationName = value;
  }
  private _Position: string;
  public get Position(): string {
    return this._Position;
  }
  public set Position(value: string) {
    this._Position = value;
  }
  private _Address: string;
  public get Address(): string {
    return this._Address;
  }
  public set Address(value: string) {
    this._Address = value;
  }
  private _SupervisorName: string;
  public get SupervisorName(): string {
    return this._SupervisorName;
  }
  public set SupervisorName(value: string) {
    this._SupervisorName = value;
  }
  private _SupervisorDesignation: string;
  public get SupervisorDesignation(): string {
    return this._SupervisorDesignation;
  }
  public set SupervisorDesignation(value: string) {
    this._SupervisorDesignation = value;
  }
  private _SupervisorPhone: string;
  public get SupervisorPhone(): string {
    return this._SupervisorPhone;
  }
  public set SupervisorPhone(value: string) {
    this._SupervisorPhone = value;
  }
  private _JobResponsibilities: string;
  public get JobResponsibilities(): string {
    return this._JobResponsibilities;
  }
  public set JobResponsibilities(value: string) {
    this._JobResponsibilities = value;
  }
  private _Salary: string;
  public get Salary(): string {
    return this._Salary;
  }
  public set Salary(value: string) {
    this._Salary = value;
  }
  private _StartDate: string;
  public get StartDate(): string {
    return this._StartDate;
  }
  public set StartDate(value: string) {
    this._StartDate = value;
  }
  private _EndDate: string;
  public get EndDate(): string {
    return this._EndDate;
  }
  public set EndDate(value: string) {
    this._EndDate = value;
  }
  private _TillNow: string;
  public get TillNow(): string {
    return this._TillNow;
  }
  public set TillNow(value: string) {
    this._TillNow = value;
  }
}
