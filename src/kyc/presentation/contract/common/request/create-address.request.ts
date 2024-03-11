import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Country } from 'src/common/enums/country.enum';
import { AddressType } from 'src/kyc/domain/common/enums/person-address-type.enum';

export class CreateAddressRequest {
  @IsString()
  @IsOptional()
  // @Expose({ name: 'address_id' })
  AddressId: string;

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
