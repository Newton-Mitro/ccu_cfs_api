import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class AddEmploymentHistoryRequest {
  @IsString()
  @IsNotEmpty()
  organization_name: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  supervisor_name: string;

  @IsString()
  @IsNotEmpty()
  supervisor_designation: string;

  @IsString()
  @IsNotEmpty()
  supervisor_phone: string;

  @IsString()
  @IsNotEmpty()
  job_responsibilities: string;

  @IsNumber()
  @IsOptional()
  salary: number;

  @IsDateString()
  @IsNotEmpty()
  start_date: Date;

  @IsDateString()
  @IsOptional()
  end_date: Date;

  @IsBoolean()
  @IsNotEmpty()
  till_now: boolean;
}
