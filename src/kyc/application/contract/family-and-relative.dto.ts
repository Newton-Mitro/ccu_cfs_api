import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BloodGroup } from 'src/kyc/domain/enum/blood-group.enum';
import { Gender } from 'src/kyc/domain/enum/gender.enum';
import { MaritalStatus } from 'src/kyc/domain/enum/marital-status.enum';
import { Profession } from 'src/kyc/domain/enum/profession.enum';
import { Religion } from 'src/kyc/domain/enum/religion.enum';
import { AddressDTO } from './address.dto';

export class FamilyAndRelativeDTO {
  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'identification_number' })
  IdentificationNumber: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'name_en' })
  NameEn: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'name_bn' })
  NameBn: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  // @Expose({ name: 'email' })
  Email: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'contact_number' })
  ContactNumber: string;

  @IsDateString()
  @IsNotEmpty()
  // @Expose({ name: 'date_of_birth' })
  DateOfBirth: Date;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'nid' })
  NID: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'birth_registration_number' })
  BirthRegistrationNumber: string;

  @IsString()
  @IsEnum(BloodGroup)
  // @Expose({ name: 'blood_group' })
  BloodGroup: string;

  @IsString()
  @IsEnum(Gender)
  // @Expose({ name: 'gender' })
  Gender: string;

  @IsString()
  @IsEnum(Religion)
  // @Expose({ name: 'religion' })
  Religion: string;

  @IsString()
  @IsEnum(Profession)
  @IsOptional()
  // @Expose({ name: 'profession' })
  Profession: string;

  @IsString()
  @IsEnum(MaritalStatus)
  // @Expose({ name: 'marital_status' })
  MaritalStatus: string;

  @IsBoolean()
  @IsOptional()
  // @Expose({ name: 'alive' })
  Alive: boolean;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'photo' })
  Photo: string;

  @Type(() => AddressDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'addresses' })
  Addresses: AddressDTO[];
}
