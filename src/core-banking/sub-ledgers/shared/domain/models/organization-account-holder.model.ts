import { CustomerType } from '../../../../../common/enums/customer-type.enum';
import { OrganizationCustomerModel } from './organization-customer.model';

export class OrganizationAccountHolderModel
  implements OrganizationCustomerModel
{
  accountHolderId: string;
  identificationNumber: string;
  nameEn: string;
  nameBn: string;
  email: string;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  customerType: CustomerType;
  tin: string;
  fax: string;
  registrationNumber: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}
