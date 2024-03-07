import { BankAccountModel } from './bank-account.model';
import { ContactPersonModel } from './contact-person.model';
import { CustomerModel } from './customer.model';

export class OrganizationModel extends CustomerModel {
  private _ParentOrganization: string;
  public get ParentOrganization(): string {
    return this._ParentOrganization;
  }
  public set ParentOrganization(value: string) {
    this._ParentOrganization = value;
  }
  private _PhoneNumber: string;
  public get PhoneNumber(): string {
    return this._PhoneNumber;
  }
  public set PhoneNumber(value: string) {
    this._PhoneNumber = value;
  }
  private _FaxNumber: string;
  public get FaxNumber(): string {
    return this._FaxNumber;
  }
  public set FaxNumber(value: string) {
    this._FaxNumber = value;
  }
  private _Website: string;
  public get Website(): string {
    return this._Website;
  }
  public set Website(value: string) {
    this._Website = value;
  }
  private _Logo: string;
  public get Logo(): string {
    return this._Logo;
  }
  public set Logo(value: string) {
    this._Logo = value;
  }
  private _ContactPeoples: ContactPersonModel[];
  public get ContactPeoples(): ContactPersonModel[] {
    return this._ContactPeoples;
  }
  public set ContactPeoples(value: ContactPersonModel[]) {
    this._ContactPeoples = value;
  }
  private _BankAccounts: BankAccountModel[];
  public get BankAccounts(): BankAccountModel[] {
    return this._BankAccounts;
  }
  public set BankAccounts(value: BankAccountModel[]) {
    this._BankAccounts = value;
  }
}
