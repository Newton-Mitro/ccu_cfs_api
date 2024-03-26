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
  customer_id: string;

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
  @IsOptional()
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
  @IsOptional()
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
