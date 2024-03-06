import { BankAccountModel } from './bank-account.model';
import { ContactPersonModel } from './contact-person.model';
import { CustomerModel } from './customer.model';

export class OrganizationModel extends CustomerModel {
  parentOrganization: string;
  phoneNumber: string;
  faxNumber: string;
  website: string;
  logo: string;
  branches: string[];
  contactPeoples: ContactPersonModel[];
  bankAccounts: BankAccountModel[];
}
