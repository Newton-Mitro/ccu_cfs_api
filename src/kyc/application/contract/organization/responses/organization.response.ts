import { AddressDTO } from '../../common/dto/address.dto';
import { BankAccountDTO } from './dto/bank-account.dto';
import { ContactPersonDTO } from './dto/contact-person.dto';
import { OrganizationAttachmentDTO } from './dto/organization-attachment.dto';
import { OrganizationDTO } from './dto/organization.dto';

export class OrganizationResponse {
  constructor(
    readonly organization_id: string,
    readonly identification_number: string,
    readonly registration_number: string,
    readonly tin: string,
    readonly name_en: string,
    readonly name_bn: string,
    readonly email: string,
    readonly contact_number: string,
    readonly mobile_number: string,
    readonly phone_number: string,
    readonly fax: string,
    readonly website: string,
    readonly logo: string,
    readonly created_at: string,
    readonly updated_at: string,
    readonly created_by: string,
    readonly updated_by: string,
  ) {}

  branches: OrganizationDTO[];
  addresses: AddressDTO[];
  contact_peoples: ContactPersonDTO[];
  bank_accounts: BankAccountDTO[];
  attachments: OrganizationAttachmentDTO[];
}
