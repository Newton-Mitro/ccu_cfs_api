import { Country } from 'src/common/enums/country.enum';
import { AddressType } from 'src/kyc/domain/enums/person-address-type.enum';

export interface AddressResponse {
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
}
