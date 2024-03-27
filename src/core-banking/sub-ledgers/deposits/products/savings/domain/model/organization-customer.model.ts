import { BaseCustomerModel } from './base-customer.model';

export class OrganizationCustomerModel extends BaseCustomerModel {
  private _TIN: string;
  public get TIN(): string {
    return this._TIN;
  }
  public set TIN(value: string) {
    this._TIN = value;
  }
  private _Fax: string;
  public get Fax(): string {
    return this._Fax;
  }
  public set Fax(value: string) {
    this._Fax = value;
  }
  private _RegistrationNumber: string;
  public get RegistrationNumber(): string {
    return this._RegistrationNumber;
  }
  public set RegistrationNumber(value: string) {
    this._RegistrationNumber = value;
  }
}
