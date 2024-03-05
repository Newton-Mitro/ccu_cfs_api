import { BaseCustomerModel } from './base-customer.model';

export class OrganizationCustomerModel extends BaseCustomerModel {
  TIN: string;
  Fax: string;
  RegistrationNumber: string;
}
