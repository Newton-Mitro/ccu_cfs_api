import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
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

  @IsEnum(Country)
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  division: string;

  @IsString()
  @IsNotEmpty()
  district: string;

  @IsString()
  @IsNotEmpty()
  subDistrict: string;

  @IsString()
  zipCode: string;
}
