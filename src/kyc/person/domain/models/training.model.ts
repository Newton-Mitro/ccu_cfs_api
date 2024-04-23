import { AuthUserType } from '../../../../common/types/auth-user.type';
import { TrainingProps } from '../types/training-props';

export class TrainingModel {
  readonly trainingId: string;
  readonly courseTitle: string;
  readonly instituteName: string;
  readonly courseContent: string;
  readonly result: string;
  readonly startDate: Date;
  readonly endDate: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly createdBy: AuthUserType | null;
  readonly updatedBy: AuthUserType | null;

  constructor(trainingProps: TrainingProps) {
    this.trainingId = trainingProps.trainingId;
    this.courseTitle = trainingProps.courseTitle;
    this.instituteName = trainingProps.instituteName;
    this.courseContent = trainingProps.courseContent;
    this.result = trainingProps.result;
    this.startDate = trainingProps.startDate;
    this.endDate = trainingProps.endDate;
    this.createdAt = trainingProps.createdAt;
    this.updatedAt = trainingProps.updatedAt;
    this.createdBy = trainingProps.createdBy;
    this.updatedBy = trainingProps.updatedBy;
  }
}
