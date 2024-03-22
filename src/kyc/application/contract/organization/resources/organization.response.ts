import { AddressResponse } from '../../common/resources/address.response';
import { AddOrganizationAttachmentRequest } from '../requests/add-organization-attachment.request';
import { BankAccountResponse } from './bank-account.response';
import { BranchResponse } from './branch.response';
import { ContactPersonResponse } from './contact-person.response';
import { OrganizationAttachmentResponse } from './organization-attachment.response';

export class OrganizationResponse {
  organizationId: string;
  identificationNumber: string;
  nameEn: string;
  nameBn: string;
  tin: string;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  fax: string;
  email: string;
  website: string;
  logo: AddOrganizationAttachmentRequest;
  branches: BranchResponse[];
  addresses: AddressResponse[];
  contactPeoples: ContactPersonResponse[];
  bankAccounts: BankAccountResponse[];
  attachments: OrganizationAttachmentResponse[];
}
