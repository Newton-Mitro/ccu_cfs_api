import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { AddressType } from 'src/kyc/domain/enum/address-type.enum';
import { Country } from 'src/kyc/domain/enum/country.enum';

export class AddressDTO {
  @IsEnum(AddressType)
  @IsNotEmpty()
  addressType: AddressType;

  @IsString()
  @IsNotEmpty()
  addressLineOne: string;

  @IsString()
  addressLineTwo: string;

  @IsString()
  city: string;

  @IsEnum(Country)
  @IsNotEmpty()
  country: string;

  @IsString()
  state: string;

  @IsString()
  division: string;

  @IsString()
  district: string;

  @IsString()
  subDistrict: string;

  @IsString()
  zipCode: string;
}
