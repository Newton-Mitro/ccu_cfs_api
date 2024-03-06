import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BloodGroup } from 'src/kyc/domain/enum/blood-group.enum';
import { Gender } from 'src/kyc/domain/enum/gender.enum';
import { MaritalStatus } from 'src/kyc/domain/enum/marital-status.enum';
import { Profession } from 'src/kyc/domain/enum/profession.enum';
import { Religion } from 'src/kyc/domain/enum/religion.enum';
import { CreateCustomerDTO } from './create-customer.dto';
import { EducationDTO } from './education.dto';
import { EmploymentHistoryDTO } from './employment-history.dto';
import { TrainingDTO } from './training.dto';

export class CreatePeopleDTO extends CreateCustomerDTO {
  @IsDateString()
  @IsNotEmpty()
  dateOfBirth: Date;

  @IsString()
  @IsOptional()
  nid: string;

  @IsString()
  @IsOptional()
  birthRegistrationNumber: string;

  @IsString()
  @IsEnum(BloodGroup)
  bloodGroup: string;

  @IsString()
  @IsEnum(Gender)
  gender: string;

  @IsString()
  @IsEnum(Religion)
  religion: string;

  @IsString()
  @IsEnum(Profession)
  @IsOptional()
  profession: string;

  @IsString()
  @IsEnum(MaritalStatus)
  maritalStatus: string;

  @IsBoolean()
  @IsOptional()
  alive: boolean;

  @IsString()
  @IsOptional()
  photo: string;

  @Type(() => EducationDTO)
  @IsArray()
  @ValidateNested({ each: true })
  educations: EducationDTO[];

  @Type(() => TrainingDTO)
  @IsArray()
  @ValidateNested({ each: true })
  trainings: TrainingDTO[];

  @Type(() => EmploymentHistoryDTO)
  @IsArray()
  @ValidateNested({ each: true })
  employmentHistories: EmploymentHistoryDTO[];
}
