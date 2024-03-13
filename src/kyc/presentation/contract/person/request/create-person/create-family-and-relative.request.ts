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
import { CreatePersonAttachmentRequest } from './create-person-attachment.request';
import { FamilyTreeStatus } from 'src/kyc/domain/enums/family-tree-status.enum';

export class CreateFamilyAndRelativeRequest {
  @IsString()
  @IsOptional()
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

  @IsDateString()
  @IsNotEmpty()
  // @Expose({ name: 'date_of_birth' })
  DateOfBirth: Date;

  @IsString()
  @IsEnum(Gender)
  // @Expose({ name: 'gender' })
  Gender: Gender;

  @IsString()
  @IsOptional()
  @IsEnum(BloodGroup)
  // @Expose({ name: 'blood_group' })
  BloodGroup: BloodGroup;

  @IsString()
  @IsEnum(Religion)
  // @Expose({ name: 'religion' })
  Religion: Religion;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'nid' })
  NID: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'birth_registration_number' })
  BirthRegistrationNumber: string;

  @IsString()
  @IsOptional()
  @IsEnum(MaritalStatus)
  // @Expose({ name: 'marital_status' })
  MaritalStatus: MaritalStatus;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'contact_number' })
  ContactNumber: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'mobile_number' })
  MobileNumber: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'phone_number' })
  PhoneNumber: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  // @Expose({ name: 'email' })
  Email: string;

  @Type(() => CreatePersonAttachmentRequest)
  @ValidateNested()
  @IsNotEmptyObject()
  // @Expose({ name: 'photo' })
  Photo: CreatePersonAttachmentRequest;

  @IsEnum(Relationship)
  @IsNotEmpty()
  // @Expose({ name: 'relationship' })
  Relationship: Relationship;

  @IsEnum(FamilyTreeStatus)
  @IsNotEmpty()
  // @Expose({ name: 'status' })
  Status: FamilyTreeStatus;
}
