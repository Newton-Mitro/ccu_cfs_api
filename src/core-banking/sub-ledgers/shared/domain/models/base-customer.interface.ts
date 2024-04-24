import { CustomerType } from '../../../../../common/domain/enums/customer-type.enum';
import { IAuditableModel } from '../../../../../common/domain/models/auditable.model';
import { AuthUserType } from '../../../../../common/domain/types/auth-user.type';
export interface IBaseCustomer extends IAuditableModel {
  identificationNumber: string;
  nameEn: string;
  nameBn: string;
  email: string;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  customerType: CustomerType;
  createdAt: Date;
  updatedAt: Date;
  createdBy: AuthUserType | null;
  updatedBy: AuthUserType | null;
}
