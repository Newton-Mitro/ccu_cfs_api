import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEducationRequest {
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
