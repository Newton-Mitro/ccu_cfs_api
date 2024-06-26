import { AddressType } from '../../../../common/domain/enums/address-type.enum';
import { Country } from '../../../../common/domain/enums/country.enum';
import { IAuditableModel } from '../../../../common/domain/models/auditable.model';
import { AuthUserType } from '../../../../common/domain/types/auth-user.type';

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
  createdBy: AuthUserType | null;
  updatedBy: AuthUserType | null;
};

export class AddressModel implements IAuditableModel {
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
  readonly createdBy: AuthUserType | null;
  readonly updatedBy: AuthUserType | null;

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
