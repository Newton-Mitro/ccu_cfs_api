import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateEmploymentHistoryRequest {
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
