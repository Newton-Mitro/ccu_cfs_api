import { Type } from 'class-transformer';
import {
  IsArray,
  IsBase64,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Country } from 'src/common/enums/country.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { KYCAttachmentType } from 'src/kyc/domain/common/enums/kyc-attachment-type.enum';
import { PersonAddressType } from 'src/kyc/domain/common/enums/person-address-type.enum';

export class CreateOrganizationRequest {
  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'name_en' })
  NameEn: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'name_bn' })
  NameBn: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'tin' })
  TIN: string;

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
  // @Expose({ name: 'fax_number' })
  Fax: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  // @Expose({ name: 'email' })
  Email: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  // @Expose({ name: 'website' })
  Website: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'parent_organization' })
  ParentOrganization: string;

  @Type(() => AddressDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'addresses' })
  Addresses: AddressDTO[];

  @Type(() => ContactPersonDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'contact_peoples' })
  ContactPeoples: ContactPersonDTO[];

  @Type(() => BankAccountDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'bank_accounts' })
  BankAccounts: BankAccountDTO[];

  @Type(() => KYCAttachmentDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'attachments' })
  Attachments: KYCAttachmentDTO[];
}

class BankAccountDTO {
  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'bank_name' })
  BankName: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'branch' })
  Branch: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'routing_number' })
  RoutingNumber: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'account_number' })
  AccountNumber: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'account_name' })
  AccountName: string;
}

class ContactPersonDTO {
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
  @IsBase64()
  // @Expose({ name: 'base64_string_document' })
  Base64StringDocument: string;
}
