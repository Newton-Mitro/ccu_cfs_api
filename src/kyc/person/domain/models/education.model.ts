import { AuthUserType } from '../../../../common/types/auth-user.type';
import { EducationProps } from '../types/education-props';

export class EducationModel {
  readonly educationId: string;
  readonly educationLevel: string;
  readonly educationDegree: string;
  readonly instituteName: string;
  readonly majorSubject: string;
  readonly passingYear: string;
  readonly grade: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly createdBy: AuthUserType | null;
  readonly updatedBy: AuthUserType | null;

  constructor(educationProps: EducationProps) {
    this.educationId = educationProps.educationId;
    this.educationLevel = educationProps.educationLevel;
    this.educationDegree = educationProps.educationDegree;
    this.instituteName = educationProps.instituteName;
    this.majorSubject = educationProps.majorSubject;
    this.passingYear = educationProps.passingYear;
    this.grade = educationProps.grade;
    this.createdAt = educationProps.createdAt;
    this.updatedAt = educationProps.updatedAt;
    this.createdBy = educationProps.createdBy;
    this.updatedBy = educationProps.updatedBy;
  }
}
