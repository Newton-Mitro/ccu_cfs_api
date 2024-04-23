import { CustomerType } from '../../../../../common/enums/customer-type.enum';
import { AuthUserType } from '../../../../../common/types/auth-user.type';
import { IOrganizationCustomer } from './organization-customer.model';

export class OrganizationAccountHolderModel implements IOrganizationCustomer {
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
  createdBy: AuthUserType | null;
  updatedBy: AuthUserType | null;
}
