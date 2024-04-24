import { AuthUserType } from '../types/auth-user.type';

export interface IAuditableModel {
  createdAt: Date;
  updatedAt: Date;
  createdBy: AuthUserType | null;
  updatedBy: AuthUserType | null;
}
