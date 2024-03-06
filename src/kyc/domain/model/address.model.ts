import { AddressType } from '../enum/address-type.enum';

export class AddressModel {
  AddressType: AddressType;
  AddressLineOne: string;
  AddressLineTwo: string;
  Country: string;
  State: string;
  City: string;
  Division: string;
  District: string;
  SubDistrict: string;
  ZipCode: string;
}
