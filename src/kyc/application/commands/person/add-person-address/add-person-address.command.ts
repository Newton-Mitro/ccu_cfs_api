import { AddressType } from 'src/kyc/domain/enums/person-address-type.enum';

export class CreateAddressCommand {
  constructor(
    public readonly addressId: string,
    public readonly addressType: AddressType,
    public readonly addressLineOne: string,
    public readonly addressLineTwo: string,
    public readonly country: string,
    public readonly state: string,
    public readonly city: string,
    public readonly division: string,
    public readonly district: string,
    public readonly subDistrict: string,
    public readonly zipCode: string,
  ) {}
}
