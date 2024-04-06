import { CustomerType } from 'src/common/enums/customer-type.enum';
import { v4 as uuidv4 } from 'uuid';
export class BaseCustomerModel {
  private _CustomerId: string = uuidv4();
  public get CustomerId(): string {
    return this._CustomerId;
  }
  public set CustomerId(value: string) {
    this._CustomerId = value;
  }
  private _IdentificationNumber: string;
  public get IdentificationNumber(): string {
    return this._IdentificationNumber;
  }
  public set IdentificationNumber(value: string) {
    this._IdentificationNumber = value;
  }
  private _NameEn: string;
  public get NameEn(): string {
    return this._NameEn;
  }
  public set NameEn(value: string) {
    this._NameEn = value;
  }
  private _NameBn: string;
  public get NameBn(): string {
    return this._NameBn;
  }
  public set NameBn(value: string) {
    this._NameBn = value;
  }
  private _Email: string;
  public get Email(): string {
    return this._Email;
  }
  public set Email(value: string) {
    this._Email = value;
  }
  private _ContactNumber: string;
  public get ContactNumber(): string {
    return this._ContactNumber;
  }
  public set ContactNumber(value: string) {
    this._ContactNumber = value;
  }
  private _SavingAccountNumber: string;
  public get SavingAccountNumber(): string {
    return this._SavingAccountNumber;
  }
  public set SavingAccountNumber(value: string) {
    this._SavingAccountNumber = value;
  }
  private _CustomerType: CustomerType;
  public get CustomerType(): CustomerType {
    return this._CustomerType;
  }
  public set CustomerType(value: CustomerType) {
    this._CustomerType = value;
  }
}
