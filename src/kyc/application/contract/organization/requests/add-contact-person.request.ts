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
  person_id: string;

  @IsString()
  @IsOptional()
  identification_number: string;

  @IsString()
  @IsNotEmpty()
  name_en: string;

  @IsString()
  @IsOptional()
  name_bn: string;

  @IsDateString()
  @IsNotEmpty()
  date_of_birth: Date;

  @IsString()
  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  @IsEnum(BloodGroup)
  blood_group: BloodGroup;

  @IsString()
  @IsEnum(Religion)
  religion: Religion;

  @IsString()
  @IsOptional()
  nid: string;

  @IsString()
  @IsOptional()
  birth_registration_number: string;

  @IsString()
  @IsEnum(MaritalStatus)
  marital_status: MaritalStatus;

  @IsString()
  @IsOptional()
  contact_number: string;

  @IsString()
  @IsOptional()
  mobile_number: string;

  @IsString()
  @IsOptional()
  phone_number: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  email: string;
}
