import { Address } from 'nodemailer/lib/mailer';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { OrganizationalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';
import { PersonAttachment } from '../../common/responses/person-attachment';

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
  logo: OrganizationAttachment;
  branches: Branch[];
  addresses: Address[];
  contactPeoples: ContactPerson[];
  bankAccounts: BankAccount[];
  attachments: OrganizationAttachment[];
}

class BankAccount {
  bankAccountId: string;
  bankName: string;
  branch: string;
  routingNumber: string;
  accountNumber: string;
  accountName: string;
}

class Branch {
  branchId: string;
  organizationId: string;
  identificationNumber: string;
  registrationNumber: string;
  tin: string;
  nameEn: string;
  nameBn: string;
  email: string;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  faxNumber: string;
  website: string;
  logo: OrganizationAttachment;
}

class ContactPerson {
  contactPersonId: string;
  personId: string;
  identificationNumber: string;
  nameEn: string;
  nameBn: string;
  dateOfBirth: Date;
  gender: Gender;
  bloodGroup: BloodGroup;
  religion: Religion;
  nid: string;
  birthRegistrationNumber: string;
  maritalStatus: MaritalStatus;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  email: string;
  photo: PersonAttachment;
}

class OrganizationAttachment {
  attachmentId: string;
  documentTitle: OrganizationalDocumentType;
  fileUrl: string;
}
