import { CustomerType } from 'src/common/enums/customer-type.enum';
import { IAuditableModel } from '../../../../../common/models/auditable.model';
export interface BaseCustomerModel extends IAuditableModel {
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
  createdBy: string;
  updatedBy: string;
}
