import { Country } from 'src/common/enums/country.enum';
import { AddressType } from '../../enums/person-address-type.enum';

export class AddressModel {
  private _AddressId: string;
  private _AddressType: AddressType;
  private _AddressLineOne: string;
  private _AddressLineTwo: string;
  private _Country: Country;
  private _State: string;
  private _City: string;
  private _Division: string;
  private _District: string;
  private _SubDistrict: string;
  private _ZipCode: string;
  private _CreatedAt: Date;
  private _UpdatedAt: Date;
  private _CreatedBy: string;
  private _UpdatedBy: string;

  constructor(
    addressId: string,
    addressType: AddressType,
    addressLineOne: string,
    addressLineTwo: string,
    country: Country,
    state: string,
    city: string,
    division: string,
    district: string,
    subDistrict: string,
    zipCode: string,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    this._AddressId = addressId;
    this._AddressType = addressType;
    this._AddressLineOne = addressLineOne;
    this._AddressLineTwo = addressLineTwo;
    this._Country = country;
    this._State = state;
    this._City = city;
    this._Division = division;
    this._District = district;
    this._SubDistrict = subDistrict;
    this._ZipCode = zipCode;
    this._CreatedAt = createdAt;
    this._UpdatedAt = updatedAt;
    this._CreatedBy = createdBy;
    this._UpdatedBy = updatedBy;
  }

  public get AddressId(): string {
    return this._AddressId;
  }

  public get AddressType(): AddressType {
    return this._AddressType;
  }
  public set AddressType(value: AddressType) {
    this._AddressType = value;
  }

  public get AddressLineOne(): string {
    return this._AddressLineOne;
  }
  public set AddressLineOne(value: string) {
    this._AddressLineOne = value;
  }

  public get AddressLineTwo(): string {
    return this._AddressLineTwo;
  }
  public set AddressLineTwo(value: string) {
    this._AddressLineTwo = value;
  }

  public get Country(): Country {
    return this._Country;
  }
  public set Country(value: Country) {
    this._Country = value;
  }

  public get State(): string {
    return this._State;
  }
  public set State(value: string) {
    this._State = value;
  }

  public get City(): string {
    return this._City;
  }
  public set City(value: string) {
    this._City = value;
  }

  public get Division(): string {
    return this._Division;
  }
  public set Division(value: string) {
    this._Division = value;
  }

  public get District(): string {
    return this._District;
  }
  public set District(value: string) {
    this._District = value;
  }

  public get SubDistrict(): string {
    return this._SubDistrict;
  }
  public set SubDistrict(value: string) {
    this._SubDistrict = value;
  }

  public get ZipCode(): string {
    return this._ZipCode;
  }
  public set ZipCode(value: string) {
    this._ZipCode = value;
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
