import { Type } from 'class-transformer';
import {
  IsArray,
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
import { CreateAddressRequest } from '../../../common/request/create-address.request';
import { CreateEducationRequest } from './create-education.request';
import { CreateEmploymentHistoryRequest } from './create-employment-history.request';
import { CreateFamilyAndRelativeRequest } from './create-family-and-relative.request';
import { CreatePersonAttachmentRequest } from './create-person-attachment.request';
import { CreateTrainingRequest } from './create-training.request';

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
  Gender: string = Gender.MALE;

  @IsString()
  @IsEnum(BloodGroup)
  // @Expose({ name: 'blood_group' })
  BloodGroup: string = BloodGroup.UNKNOWN;

  @IsString()
  @IsEnum(Religion)
  // @Expose({ name: 'religion' })
  Religion: string = Religion.UNWILLING_TO_REVEAL;

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
  MaritalStatus: string = MaritalStatus.SINGLE;

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
  Profession: string = Profession.UNWILLING_TO_REVEAL;

  @Type(() => CreatePersonAttachmentRequest)
  @IsOptional()
  @ValidateNested()
  // @Expose({ name: 'photo' })
  Photo: CreatePersonAttachmentRequest;

  @Type(() => CreateAddressRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'addresses' })
  Addresses: CreateAddressRequest[];

  @Type(() => CreateFamilyAndRelativeRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'family_tree' })
  FamilyTree: CreateFamilyAndRelativeRequest[];

  @Type(() => CreateEducationRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'educations' })
  Educations: CreateEducationRequest[];

  @Type(() => CreateTrainingRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'trainings' })
  Trainings: CreateTrainingRequest[];

  @Type(() => CreateEmploymentHistoryRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'employment_histories' })
  EmploymentHistories: CreateEmploymentHistoryRequest[];

  @Type(() => CreatePersonAttachmentRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'attachments' })
  Attachments: CreatePersonAttachmentRequest[];
}
