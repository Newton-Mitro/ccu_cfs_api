import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { AddPersonAttachmentRequest } from '../../../../person/application/contract/requests/add-person-attachment.request';

export class AddContactPersonRequest {
  @IsString()
  @IsNotEmpty()
  organization_id: string;

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

  @IsString()
  @IsOptional()
  contact_number: string = '';

  @IsString()
  @IsOptional()
  mobile_number: string = '';

  @IsString()
  @IsOptional()
  phone_number: string = '';

  @IsString()
  @IsOptional()
  @IsEmail()
  email: string = '';

  @IsString()
  @IsOptional()
  customer_type: string = '';

  @IsDateString()
  @IsNotEmpty()
  date_of_birth: Date;

  @IsString()
  @IsEnum(Gender)
  gender: Gender = Gender.MALE;

  @IsString()
  @IsEnum(BloodGroup)
  blood_group: BloodGroup = BloodGroup.UNKNOWN;

  @IsString()
  @IsEnum(Religion)
  religion: Religion = Religion.UNWILLING_TO_REVEAL;

  @IsString()
  @IsEnum(MaritalStatus)
  marital_status: MaritalStatus = MaritalStatus.SINGLE;

  @IsString()
  @IsEnum(Profession)
  @IsOptional()
  profession: Profession = Profession.UNWILLING_TO_REVEAL;

  @IsString()
  @IsOptional()
  nid: string = '';

  @IsString()
  @IsOptional()
  birth_registration_number: string = '';

  @Type(() => AddPersonAttachmentRequest)
  @IsOptional()
  @ValidateNested()
  photo: AddPersonAttachmentRequest;
}
