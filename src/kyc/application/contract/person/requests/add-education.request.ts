import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class AddEducationRequest {
  @IsString()
  @IsNotEmpty()
  educationLevel: string;

  @IsString()
  @IsNotEmpty()
  educationDegree: string;

  @IsString()
  @IsNotEmpty()
  instituteName: string;

  @IsString()
  @IsOptional()
  majorSubject: string;

  @IsString()
  @IsNotEmpty()
  passingYear: string;

  @IsString()
  @IsNotEmpty()
  grade: string;
}
