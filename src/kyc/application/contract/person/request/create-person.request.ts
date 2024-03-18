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
  // @Expose({ name: 'name_en' })
  NameEn: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'name_bn' })
  NameBn: string = '';

  @IsDateString()
  @IsNotEmpty()
  // @Expose({ name: 'date_of_birth' })
  DateOfBirth: Date;

  @IsString()
  @IsEnum(Gender)
  // @Expose({ name: 'gender' })
  Gender: Gender = Gender.MALE;

  @IsString()
  @IsEnum(BloodGroup)
  // @Expose({ name: 'blood_group' })
  BloodGroup: BloodGroup = BloodGroup.UNKNOWN;

  @IsString()
  @IsEnum(Religion)
  // @Expose({ name: 'religion' })
  Religion: Religion = Religion.UNWILLING_TO_REVEAL;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'nid' })
  NID: string = '';

  @IsString()
  @IsOptional()
  // @Expose({ name: 'birth_registration_number' })
  BirthRegistrationNumber: string = '';

  @IsString()
  @IsEnum(MaritalStatus)
  // @Expose({ name: 'marital_status' })
  MaritalStatus: MaritalStatus = MaritalStatus.SINGLE;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'contact_number' })
  ContactNumber: string = '';

  @IsString()
  @IsOptional()
  // @Expose({ name: 'mobile_number' })
  MobileNumber: string = '';

  @IsString()
  @IsOptional()
  // @Expose({ name: 'phone_number' })
  PhoneNumber: string = '';

  @IsString()
  @IsOptional()
  @IsEmail()
  // @Expose({ name: 'email' })
  Email: string = '';

  @IsString()
  @IsEnum(Profession)
  @IsOptional()
  // @Expose({ name: 'profession' })
  Profession: Profession = Profession.UNWILLING_TO_REVEAL;

  @Type(() => AddPersonAttachmentRequest)
  @IsOptional()
  @ValidateNested()
  // @Expose({ name: 'photo' })
  Photo: AddPersonAttachmentRequest;
}
