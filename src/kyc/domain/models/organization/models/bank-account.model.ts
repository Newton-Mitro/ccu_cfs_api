export class BankAccountModel {
  private _BankAccountId: string;
  private _BankName: string;
  private _Branch: string;
  private _RoutingNumber: string;
  private _AccountNumber: string;
  private _AccountName: string;
  private _CreatedAt: Date;
  private _UpdatedAt: Date;
  private _CreatedBy: string;
  private _UpdatedBy: string;

  constructor(
    bankAccountId: string,
    bankName: string,
    branch: string,
    routingNumber: string,
    accountNumber: string,
    accountName: string,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    this._BankAccountId = bankAccountId;
    this._BankName = bankName;
    this._Branch = branch;
    this._RoutingNumber = routingNumber;
    this._AccountNumber = accountNumber;
    this._AccountName = accountName;
    this._CreatedAt = createdAt;
    this._UpdatedAt = updatedAt;
    this._CreatedBy = createdBy;
    this._UpdatedBy = updatedBy;
  }

  public get BankAccountId(): string {
    return this._BankAccountId;
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
