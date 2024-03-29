import { AddressType } from 'src/common/enums/address-type.enum';

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
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly createdBy: string,
    public readonly updatedBy: string,
  ) {}
}
