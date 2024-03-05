import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { CustomerType } from 'src/kyc/core/enum/customer-type.enum';
import { Gender } from 'src/kyc/core/enum/gender.enum';
import { MaritalStatus } from 'src/kyc/core/enum/marital-status.enum';
import { Profession } from 'src/kyc/core/enum/profession.enum';
import { Religion } from 'src/kyc/core/enum/religion.enum';

export class CustomerDTO {
  @IsOptional()
  @IsString()
  Id: string;

  @IsNotEmpty()
  @IsString()
  IdentificationNumber: string;

  @IsNotEmpty()
  @IsString()
  NameEn: string;

  @IsOptional()
  @IsString()
  NameBn: string;

  @IsOptional()
  @IsString()
  Email: string;

  @IsOptional()
  @IsString()
  ContactNumber: string;

  @IsOptional()
  @IsDateString()
  DateOfBirth: string;

  @IsOptional()
  @IsString()
  NID: string;

  @IsOptional()
  @IsString()
  BirthRegistrationNumber: string;

  @IsOptional()
  @IsString()
  @IsEnum(Gender)
  Gender: Gender;

  @IsOptional()
  @IsString()
  @IsEnum(Religion)
  Religion: Religion;

  @IsOptional()
  @IsString()
  @IsEnum(Profession)
  Profession: Profession;

  @IsOptional()
  @IsString()
  @IsEnum(MaritalStatus)
  MaritalStatus: MaritalStatus;

  @IsOptional()
  @IsString()
  SavingAccountNumber: string;

  @IsOptional()
  @IsString()
  TIN: string;

  @IsOptional()
  @IsString()
  Fax: string;

  @IsOptional()
  @IsString()
  RegistrationNumber: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(CustomerType)
  CustomerType: CustomerType;
}
