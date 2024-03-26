import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class AddTrainingRequest {
  @IsString()
  @IsNotEmpty()
  course_title: string;

  @IsString()
  @IsNotEmpty()
  institute_name: string;

  @IsString()
  @IsNotEmpty()
  courseContent: string;

  @IsString()
  @IsOptional()
  result: string;

  @IsDateString()
  @IsOptional()
  start_date: Date;

  @IsDateString()
  @IsOptional()
  end_date: Date;
}
