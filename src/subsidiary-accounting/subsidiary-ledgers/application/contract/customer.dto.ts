import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { CustomerType } from 'src/kyc/domain/enum/customer-type.enum';
import { Gender } from 'src/kyc/domain/enum/gender.enum';
import { MaritalStatus } from 'src/kyc/domain/enum/marital-status.enum';
import { Profession } from 'src/kyc/domain/enum/profession.enum';
import { Religion } from 'src/kyc/domain/enum/religion.enum';

export class CustomerDTO {
  @IsNotEmpty()
  @IsString()
  // @Expose({ name: 'identification_number' })
  IdentificationNumber: string;

  @IsNotEmpty()
  @IsString()
  // @Expose({ name: 'name_en' })
  NameEn: string;

  @IsOptional()
  @IsString()
  // @Expose({ name: 'name_bn' })
  NameBn: string;

  @IsOptional()
  @IsString()
  // @Expose({ name: 'email' })
  Email: string;

  @IsOptional()
  @IsString()
  // @Expose({ name: 'contact_number' })
  ContactNumber: string;

  @IsOptional()
  @IsDateString()
  // @Expose({ name: 'date_of_birth' })
  DateOfBirth: string;

  @IsOptional()
  @IsString()
  // @Expose({ name: 'nid' })
  NID: string;

  @IsOptional()
  @IsString()
  // @Expose({ name: 'birth_registration_number' })
  BirthRegistrationNumber: string;

  @IsOptional()
  @IsString()
  @IsEnum(Gender)
  // @Expose({ name: 'gender' })
  Gender: Gender;

  @IsOptional()
  @IsString()
  @IsEnum(Religion)
  // @Expose({ name: 'religion' })
  Religion: Religion;

  @IsOptional()
  @IsString()
  @IsEnum(Profession)
  // @Expose({ name: 'profession' })
  Profession: Profession;

  @IsOptional()
  @IsString()
  @IsEnum(MaritalStatus)
  // @Expose({ name: 'marital_status' })
  MaritalStatus: MaritalStatus;

  @IsOptional()
  @IsString()
  // @Expose({ name: 'saving_account_number' })
  SavingAccountNumber: string;

  @IsOptional()
  @IsString()
  // @Expose({ name: 'tin' })
  TIN: string;

  @IsOptional()
  @IsString()
  // @Expose({ name: 'fax' })
  Fax: string;

  @IsOptional()
  @IsString()
  // @Expose({ name: 'registration_number' })
  RegistrationNumber: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(CustomerType)
  // @Expose({ name: 'customer_type' })
  CustomerType: CustomerType;
}
