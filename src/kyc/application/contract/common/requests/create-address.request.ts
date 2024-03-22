import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Country } from 'src/common/enums/country.enum';
import { AddressType } from 'src/kyc/domain/enums/person-address-type.enum';

export class CreateAddressRequest {
  @IsString()
  @IsOptional()
  addressId: string;

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
  @IsOptional()
  zipCode: string;
}
