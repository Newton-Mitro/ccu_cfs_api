import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Country } from 'src/common/enums/country.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Relationship } from 'src/common/enums/relationship.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { FamilyTreeStatus } from 'src/kyc/domain/common/enums/family-tree-status.enum';
import { KYCAttachmentType } from 'src/kyc/domain/common/enums/kyc-attachment-type.enum';
import { PersonAddressType } from 'src/kyc/domain/common/enums/person-address-type.enum';

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

  @Type(() => AddressDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'addresses' })
  Addresses: AddressDTO[];

  @Type(() => FamilyTreeDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'family_tree' })
  FamilyTree: FamilyTreeDTO[];

  @Type(() => EducationDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'educations' })
  Educations: EducationDTO[];

  @Type(() => TrainingDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'trainings' })
  Trainings: TrainingDTO[];

  @Type(() => EmploymentHistoryDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'employment_histories' })
  EmploymentHistories: EmploymentHistoryDTO[];

  @Type(() => KYCAttachmentDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'attachments' })
  Attachments: KYCAttachmentDTO[];
}

class EducationDTO {
  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'education_level' })
  EducationLevel: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'education_degree' })
  EducationDegree: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'institute_name' })
  InstituteName: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'major_subject' })
  MajorSubject: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'passing_year' })
  PassingYear: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'grade' })
  Grade: string;
}

class EmploymentHistoryDTO {
  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'organization_name' })
  OrganizationName: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'position' })
  Position: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'address' })
  Address: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'supervisor_name' })
  SupervisorName: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'supervisor_designation' })
  SupervisorDesignation: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'supervisor_phone' })
  SupervisorPhone: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'job_responsibilities' })
  JobResponsibilities: string;

  @IsNumber()
  @IsOptional()
  // @Expose({ name: 'salary' })
  Salary: number;

  @IsDateString()
  @IsNotEmpty()
  // @Expose({ name: 'start_date' })
  StartDate: Date;

  @IsDateString()
  @IsOptional()
  // @Expose({ name: 'end_date' })
  EndDate: Date;

  @IsBoolean()
  @IsNotEmpty()
  // @Expose({ name: 'till_now' })
  TillNow: boolean;
}

class FamilyTreeDTO {
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
  Gender: string;

  @IsString()
  @IsOptional()
  @IsEnum(BloodGroup)
  // @Expose({ name: 'blood_group' })
  BloodGroup: string;

  @IsString()
  @IsEnum(Religion)
  // @Expose({ name: 'religion' })
  Religion: string;

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
  MaritalStatus: string;

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

  @IsEnum(Relationship)
  @IsNotEmpty()
  // @Expose({ name: 'relationship' })
  Relationship: Relationship;

  @IsEnum(FamilyTreeStatus)
  @IsNotEmpty()
  // @Expose({ name: 'status' })
  Status: FamilyTreeStatus;
}

class TrainingDTO {
  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'course_title' })
  CourseTitle: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'institute_name' })
  InstituteName: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'course_content' })
  CourseContent: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'result' })
  Result: string;

  @IsDateString()
  @IsOptional()
  // @Expose({ name: 'start_date' })
  StartDate: Date;

  @IsDateString()
  @IsOptional()
  // @Expose({ name: 'end_date' })
  EndDate: Date;
}

class KYCAttachmentDTO {
  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'file_extension' })
  FileExtension: string;

  @IsString({ each: true })
  @IsEnum(KYCAttachmentType)
  // @Expose({ name: 'document_title' })
  DocumentTitle: KYCAttachmentType;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'base64_string_document' })
  Base64StringDocument: string;
}

class AddressDTO {
  @IsString()
  @IsOptional()
  // @Expose({ name: 'address_id' })
  AddressId: string;

  @IsEnum(PersonAddressType)
  @IsNotEmpty()
  // @Expose({ name: 'address_type' })
  AddressType: PersonAddressType;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'address_line_one' })
  AddressLineOne: string;

  @IsString()
  // @Expose({ name: 'address_line_two' })
  AddressLineTwo: string;

  @IsEnum(Country)
  @IsNotEmpty()
  // @Expose({ name: 'country' })
  Country: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'state' })
  State: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'city' })
  City: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'division' })
  Division: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'district' })
  District: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'sub_district' })
  SubDistrict: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'zip_code' })
  ZipCode: string;
}
