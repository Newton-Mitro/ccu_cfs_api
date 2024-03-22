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
import { AddPersonAttachmentRequest } from './add-person-attachment.request';

export class CreatePersonRequest {
  @IsString()
  @IsNotEmpty()
  nameEn: string;

  @IsString()
  @IsOptional()
  nameBn: string = '';

  @IsDateString()
  @IsNotEmpty()
  dateOfBirth: Date;

  @IsString()
  @IsEnum(Gender)
  gender: Gender = Gender.MALE;

  @IsString()
  @IsEnum(BloodGroup)
  bloodGroup: BloodGroup = BloodGroup.UNKNOWN;

  @IsString()
  @IsEnum(Religion)
  religion: Religion = Religion.UNWILLING_TO_REVEAL;

  @IsString()
  @IsOptional()
  nid: string = '';

  @IsString()
  @IsOptional()
  birthRegistrationNumber: string = '';

  @IsString()
  @IsEnum(MaritalStatus)
  maritalStatus: MaritalStatus = MaritalStatus.SINGLE;

  @IsString()
  @IsOptional()
  contactNumber: string = '';

  @IsString()
  @IsOptional()
  mobileNumber: string = '';

  @IsString()
  @IsOptional()
  phoneNumber: string = '';

  @IsString()
  @IsOptional()
  @IsEmail()
  email: string = '';

  @IsString()
  @IsEnum(Profession)
  @IsOptional()
  profession: Profession = Profession.UNWILLING_TO_REVEAL;

  @Type(() => AddPersonAttachmentRequest)
  @IsOptional()
  @ValidateNested()
  photo: AddPersonAttachmentRequest;
}
