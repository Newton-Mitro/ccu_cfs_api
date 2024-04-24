import { AuthUserType } from '../../../../common/domain/types/auth-user.type';

export type TrainingProps = {
  trainingId: string;
  courseTitle: string;
  instituteName: string;
  courseContent: string;
  result: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: AuthUserType | null;
  updatedBy: AuthUserType | null;
};
