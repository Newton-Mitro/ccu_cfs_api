export class BankAccountEntity {
  private _BankName: string;
  public get BankName(): string {
    return this._BankName;
  }
  public set BankName(value: string) {
    this._BankName = value;
  }
  private _Branch: string;
  public get Branch(): string {
    return this._Branch;
  }
  public set Branch(value: string) {
    this._Branch = value;
  }
  private _RoutingNumber: string;
  public get RoutingNumber(): string {
    return this._RoutingNumber;
  }
  public set RoutingNumber(value: string) {
    this._RoutingNumber = value;
  }
  private _AccountNumber: string;
  public get AccountNumber(): string {
    return this._AccountNumber;
  }
  public set AccountNumber(value: string) {
    this._AccountNumber = value;
  }
  private _AccountName: string;
  public get AccountName(): string {
    return this._AccountName;
  }
  public set AccountName(value: string) {
    this._AccountName = value;
  }
}
