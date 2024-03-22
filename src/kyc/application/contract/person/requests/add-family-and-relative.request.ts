import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Relationship } from 'src/common/enums/relationship.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { FamilyTreeStatus } from 'src/kyc/domain/enums/family-tree-status.enum';
import { AddPersonAttachmentRequest } from './add-person-attachment.request';

export class AddFamilyAndRelativeRequest {
  @IsString()
  @IsOptional()
  customerId: string;

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
  @IsOptional()
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
  @IsOptional()
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

  @Type(() => AddPersonAttachmentRequest)
  @ValidateNested()
  @IsNotEmptyObject()
  photo: AddPersonAttachmentRequest;

  @IsEnum(Relationship)
  @IsNotEmpty()
  relationship: Relationship;

  @IsEnum(FamilyTreeStatus)
  @IsNotEmpty()
  status: FamilyTreeStatus;
}
