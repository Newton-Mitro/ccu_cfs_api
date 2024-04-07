export interface IAuditableModel {
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}
