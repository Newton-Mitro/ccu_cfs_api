import { Country } from 'src/common/enums/country.enum';
import { AddressType } from '../../../../common/enums/address-type.enum';

export type AddressProps = {
  addressId: string;
  addressType: AddressType;
  addressLineOne: string;
  addressLineTwo: string;
  country: Country;
  state: string;
  city: string;
  division: string;
  district: string;
  subDistrict: string;
  zipCode: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export class AddressModel {
  readonly addressId: string;
  readonly addressType: AddressType;
  readonly addressLineOne: string;
  readonly addressLineTwo: string;
  readonly country: Country;
  readonly state: string;
  readonly city: string;
  readonly division: string;
  readonly district: string;
  readonly subDistrict: string;
  readonly zipCode: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly createdBy: string;
  readonly updatedBy: string;

  constructor(addressProps: AddressProps) {
    this.addressId = addressProps.addressId;
    this.addressType = addressProps.addressType;
    this.addressLineOne = addressProps.addressLineOne;
    this.addressLineTwo = addressProps.addressLineTwo;
    this.country = addressProps.country;
    this.state = addressProps.state;
    this.city = addressProps.city;
    this.division = addressProps.division;
    this.district = addressProps.district;
    this.subDistrict = addressProps.subDistrict;
    this.zipCode = addressProps.zipCode;
    this.createdAt = addressProps.createdAt;
    this.updatedAt = addressProps.updatedAt;
    this.createdBy = addressProps.createdBy;
    this.updatedBy = addressProps.updatedBy;
  }
}
