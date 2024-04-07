import { BaseCustomerModel } from './base-customer.model';

export interface OrganizationCustomerModel extends BaseCustomerModel {
  tin: string;
  fax: string;
  registrationNumber: string;
}
