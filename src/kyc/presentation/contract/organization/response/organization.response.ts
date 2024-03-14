import { AddressResponse } from '../../common/response/address.response';
import { AddOrganizationAttachmentRequest } from '../request/add-organization-attachment.request';
import { BankAccountResponse } from './bank-account.response';
import { BranchResponse } from './branch.response';
import { ContactPersonResponse } from './contact-person.response';
import { OrganizationAttachmentResponse } from './organization-attachment.response';

export class OrganizationResponse {
  // @Expose({ name: 'organization_id' })
  OrganizationId: string;

  // @Expose({ name: 'identification_number' })
  IdentificationNumber: string;

  // @Expose({ name: 'name_en' })
  NameEn: string;

  // @Expose({ name: 'name_bn' })
  NameBn: string;

  // @Expose({ name: 'tin' })
  TIN: string;

  // @Expose({ name: 'contact_number' })
  ContactNumber: string;

  // @Expose({ name: 'mobile_number' })
  MobileNumber: string;

  // @Expose({ name: 'phone_number' })
  PhoneNumber: string;

  // @Expose({ name: 'fax_number' })
  Fax: string;

  // @Expose({ name: 'email' })
  Email: string;

  // @Expose({ name: 'website' })
  Website: string;

  // @Expose({ name: 'logo' })
  Logo: AddOrganizationAttachmentRequest;

  // @Expose({ name: 'branches' })
  Branches: BranchResponse[];

  // @Expose({ name: 'addresses' })
  Addresses: AddressResponse[];

  // @Expose({ name: 'contact_peoples' })
  ContactPeoples: ContactPersonResponse[];

  // @Expose({ name: 'bank_accounts' })
  BankAccounts: BankAccountResponse[];

  // @Expose({ name: 'attachments' })
  Attachments: OrganizationAttachmentResponse[];
}
