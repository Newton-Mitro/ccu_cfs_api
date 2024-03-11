import { AddressType } from '../enums/person-address-type.enum';

export class AddressModel {
  private _AddressType: AddressType;
  public get AddressType(): AddressType {
    return this._AddressType;
  }
  public set AddressType(value: AddressType) {
    this._AddressType = value;
  }
  private _AddressLineOne: string;
  public get AddressLineOne(): string {
    return this._AddressLineOne;
  }
  public set AddressLineOne(value: string) {
    this._AddressLineOne = value;
  }
  private _AddressLineTwo: string;
  public get AddressLineTwo(): string {
    return this._AddressLineTwo;
  }
  public set AddressLineTwo(value: string) {
    this._AddressLineTwo = value;
  }
  private _Country: string;
  public get Country(): string {
    return this._Country;
  }
  public set Country(value: string) {
    this._Country = value;
  }
  private _State: string;
  public get State(): string {
    return this._State;
  }
  public set State(value: string) {
    this._State = value;
  }
  private _City: string;
  public get City(): string {
    return this._City;
  }
  public set City(value: string) {
    this._City = value;
  }
  private _Division: string;
  public get Division(): string {
    return this._Division;
  }
  public set Division(value: string) {
    this._Division = value;
  }
  private _District: string;
  public get District(): string {
    return this._District;
  }
  public set District(value: string) {
    this._District = value;
  }
  private _SubDistrict: string;
  public get SubDistrict(): string {
    return this._SubDistrict;
  }
  public set SubDistrict(value: string) {
    this._SubDistrict = value;
  }
  private _ZipCode: string;
  public get ZipCode(): string {
    return this._ZipCode;
  }
  public set ZipCode(value: string) {
    this._ZipCode = value;
  }
}
