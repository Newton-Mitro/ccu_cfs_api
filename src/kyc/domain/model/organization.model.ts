import { BankAccountModel } from './bank-account.model';
import { ContactPersonModel } from './contact-person.model';
import { CustomerModel } from './customer.model';

export class OrganizationModel extends CustomerModel {
  ParentOrganization: string;
  PhoneNumber: string;
  FaxNumber: string;
  Website: string;
  Logo: string;
  ContactPeoples: ContactPersonModel[];
  BankAccounts: BankAccountModel[];
}
