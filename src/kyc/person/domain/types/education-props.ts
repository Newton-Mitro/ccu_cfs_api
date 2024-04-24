import { AuthUserType } from '../../../../common/domain/types/auth-user.type';

export type EducationProps = {
  educationId: string;
  educationLevel: string;
  educationDegree: string;
  instituteName: string;
  majorSubject: string;
  passingYear: string;
  grade: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: AuthUserType | null;
  updatedBy: AuthUserType | null;
};
