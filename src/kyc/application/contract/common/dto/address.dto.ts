import { Country } from 'src/common/enums/country.enum';
import { AddressType } from 'src/kyc/domain/enums/person-address-type.enum';

export class AddressDTO {
  constructor(
    readonly addressId: string,
    readonly addressType: AddressType,
    readonly addressLineOne: string,
    readonly addressLineTwo: string,
    readonly country: Country,
    readonly state: string,
    readonly city: string,
    readonly division: string,
    readonly district: string,
    readonly subDistrict: string,
    readonly zipCode: string,
    readonly created_at: string,
    readonly updated_at: string,
    readonly created_by: string,
    readonly updated_by: string,
  ) {}
}
