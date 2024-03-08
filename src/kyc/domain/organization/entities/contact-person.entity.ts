export class ContactPersonEntity {
  private _ContactPersonPIN: string;
  public get ContactPersonPIN(): string {
    return this._ContactPersonPIN;
  }
  public set ContactPersonPIN(value: string) {
    this._ContactPersonPIN = value;
  }
  private _ContactPersonName: string;
  public get ContactPersonName(): string {
    return this._ContactPersonName;
  }
  public set ContactPersonName(value: string) {
    this._ContactPersonName = value;
  }
  private _ContactNumber: string;
  public get ContactNumber(): string {
    return this._ContactNumber;
  }
  public set ContactNumber(value: string) {
    this._ContactNumber = value;
  }
  private _EmergencyContactNumber: string;
  public get EmergencyContactNumber(): string {
    return this._EmergencyContactNumber;
  }
  public set EmergencyContactNumber(value: string) {
    this._EmergencyContactNumber = value;
  }
  private _Email: string;
  public get Email(): string {
    return this._Email;
  }
  public set Email(value: string) {
    this._Email = value;
  }
}
