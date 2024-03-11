import { Country } from 'src/common/enums/country.enum';
import { AddressType } from 'src/kyc/domain/common/enums/person-address-type.enum';

export interface AddressResponse {
  // @Expose({ name: 'address_id' })
  AddressId: string;

  // @Expose({ name: 'address_type' })
  AddressType: AddressType;

  // @Expose({ name: 'address_line_one' })
  AddressLineOne: string;

  // @Expose({ name: 'address_line_two' })
  AddressLineTwo: string;

  // @Expose({ name: 'country' })
  Country: Country;

  // @Expose({ name: 'state' })
  State: string;

  // @Expose({ name: 'city' })
  City: string;

  // @Expose({ name: 'division' })
  Division: string;

  // @Expose({ name: 'district' })
  District: string;

  // @Expose({ name: 'sub_district' })
  SubDistrict: string;

  // @Expose({ name: 'zip_code' })
  ZipCode: string;
}
