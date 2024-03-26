import { AddressDTO } from '../../common/dto/address.dto';
import { PersonDTO } from '../../person/responses/dto/person.dto';
import { BankAccountDTO } from './dto/bank-account.dto';
import { OrganizationAttachmentDTO } from './dto/organization-attachment.dto';
import { OrganizationDTO } from './dto/organization.dto';

export class OrganizationResponse {
  constructor(
    readonly organization: OrganizationDTO,
    readonly branches: OrganizationDTO[],
    readonly addresses: AddressDTO[],
    readonly contact_peoples: PersonDTO[],
    readonly bank_accounts: BankAccountDTO[],
    readonly attachments: OrganizationAttachmentDTO[],
  ) {}
}
