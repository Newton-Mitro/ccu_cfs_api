import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddEducationRequest {
  @IsString()
  @IsNotEmpty()
  education_level: string;

  @IsString()
  @IsNotEmpty()
  education_degree: string;

  @IsString()
  @IsNotEmpty()
  institute_name: string;

  @IsString()
  @IsOptional()
  major_subject: string;

  @IsString()
  @IsNotEmpty()
  passing_year: string;

  @IsString()
  @IsNotEmpty()
  grade: string;
}
