import { IBaseCustomer } from './base-customer.interface';

export interface IOrganizationCustomer extends IBaseCustomer {
  tin: string;
  fax: string;
  registrationNumber: string;
}
