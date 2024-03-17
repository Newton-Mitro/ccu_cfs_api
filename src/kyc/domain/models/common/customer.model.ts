import { AggregateRoot } from '@nestjs/cqrs';
import { AddressType } from '../../enums/person-address-type.enum';
import { AddressEntity } from '../common/address.entity';

export class CustomerModel extends AggregateRoot {
  private _IdentificationNumber: string;
  private _NameEn: string;
  private _NameBn: string;
  private _ContactNumber: string;
  private _MobileNumber: string;
  private _PhoneNumber: string;
  private _Email: string;
  private _Addresses: AddressEntity[];

  constructor() {
    super();
  }

  public addAddress(
    addressId: string,
    addressType: AddressType,
    addressLineOne: string,
    addressLineTwo: string,
    country: string,
    state: string,
    city: string,
    division: string,
    district: string,
    subDistrict: string,
    zipCode: string,
  ) {
    // Business logic for address adding
    this.apply('AddressAddedEvent');
  }

  public deleteAddress(addressId: string) {
    // Business logic for deleting address
    this.apply('AddressDeletedEvent');
  }

  public get IdentificationNumber(): string {
    return this._IdentificationNumber;
  }
  public set IdentificationNumber(value: string) {
    this._IdentificationNumber = value;
  }

  public get NameEn(): string {
    return this._NameEn;
  }
  public set NameEn(value: string) {
    this._NameEn = value;
  }

  public get NameBn(): string {
    return this._NameBn;
  }
  public set NameBn(value: string) {
    this._NameBn = value;
  }

  public get ContactNumber(): string {
    return this._ContactNumber;
  }
  public set ContactNumber(value: string) {
    this._ContactNumber = value;
  }

  public get MobileNumber(): string {
    return this._MobileNumber;
  }
  public set MobileNumber(value: string) {
    this._MobileNumber = value;
  }

  public get PhoneNumber(): string {
    return this._PhoneNumber;
  }
  public set PhoneNumber(value: string) {
    this._PhoneNumber = value;
  }

  public get Email(): string {
    return this._Email;
  }
  public set Email(value: string) {
    this._Email = value;
  }

  public get Addresses(): AddressEntity[] {
    return this._Addresses;
  }
  public set Addresses(value: AddressEntity[]) {
    this._Addresses = value;
  }
}
