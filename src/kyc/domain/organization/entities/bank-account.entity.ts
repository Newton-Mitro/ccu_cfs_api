import { BaseEntity } from 'src/common/entities/base-entity';

export class BankAccountModel extends BaseEntity {
  private _BankName: string;
  private _Branch: string;
  private _RoutingNumber: string;
  private _AccountNumber: string;
  private _AccountName: string;

  constructor(
    bankAccountId: string,
    bankName: string,
    branch: string,
    routingNumber: string,
    accountNumber: string,
    accountName: string,
  ) {
    super(bankAccountId);
    this._BankName = bankName;
    this._Branch = branch;
    this._RoutingNumber = routingNumber;
    this._AccountNumber = accountNumber;
    this._AccountName = accountName;
  }

  public get BankName(): string {
    return this._BankName;
  }

  public set BankName(value: string) {
    this._BankName = value;
  }

  public get Branch(): string {
    return this._Branch;
  }

  public set Branch(value: string) {
    this._Branch = value;
  }

  public get RoutingNumber(): string {
    return this._RoutingNumber;
  }

  public set RoutingNumber(value: string) {
    this._RoutingNumber = value;
  }

  public get AccountNumber(): string {
    return this._AccountNumber;
  }

  public set AccountNumber(value: string) {
    this._AccountNumber = value;
  }

  public get AccountName(): string {
    return this._AccountName;
  }

  public set AccountName(value: string) {
    this._AccountName = value;
  }
}
