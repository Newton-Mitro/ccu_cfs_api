import { AddressType } from '../enum/address-type.enum';

export class AddressModel {
  addressType: AddressType;
  addressLineOne: string;
  addressLineTwo: string;
  country: string;
  state: string;
  city: string;
  division: string;
  district: string;
  subDistrict: string;
  zipCode: string;
}
