import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { AddressType } from '../../core/enum/address-type.enum';
import { Country } from '../../core/enum/country.enum';

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
