import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Religion } from 'src/common/enums/religion.enum';

export class AddContactPersonRequest {
  @IsString()
  @IsOptional()
  personId: string;

  @IsString()
  @IsOptional()
  identificationNumber: string;

  @IsString()
  @IsNotEmpty()
  nameEn: string;

  @IsString()
  @IsOptional()
  nameBn: string;

  @IsDateString()
  @IsNotEmpty()
  dateOfBirth: Date;

  @IsString()
  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  @IsEnum(BloodGroup)
  bloodGroup: BloodGroup;

  @IsString()
  @IsEnum(Religion)
  religion: Religion;

  @IsString()
  @IsOptional()
  nid: string;

  @IsString()
  @IsOptional()
  birthRegistrationNumber: string;

  @IsString()
  @IsEnum(MaritalStatus)
  maritalStatus: MaritalStatus;

  @IsString()
  @IsOptional()
  contactNumber: string;

  @IsString()
  @IsOptional()
  mobileNumber: string;

  @IsString()
  @IsOptional()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  email: string;
}
