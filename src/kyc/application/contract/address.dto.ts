import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { AddressType } from 'src/kyc/domain/enum/address-type.enum';
import { Country } from 'src/kyc/domain/enum/country.enum';

export class AddressDTO {
  @IsEnum(AddressType)
  @IsNotEmpty()
  // @Expose({ name: 'address_type' })
  AddressType: AddressType;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'address_line_one' })
  AddressLineOne: string;

  @IsString()
  // @Expose({ name: 'address_line_two' })
  AddressLineTwo: string;

  @IsEnum(Country)
  @IsNotEmpty()
  // @Expose({ name: 'country' })
  Country: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'state' })
  State: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'city' })
  City: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'division' })
  Division: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'district' })
  District: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'sub_district' })
  SubDistrict: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'zip_code' })
  ZipCode: string;
}
