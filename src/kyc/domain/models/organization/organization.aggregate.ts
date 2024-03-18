import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { OrganizationalDocumentType } from '../../enums/kyc-attachment-type.enum';
import { AddressType } from '../../enums/person-address-type.enum';
import { CustomerModel } from '../common/customer.model';
import { BankAccountEntity } from './entities/bank-account.entity';
import { BranchEntity } from './entities/branch.entity';
import { ContactPersonEntity } from './entities/contact-person.entity';
import { OrganizationAttachmentEntity } from './entities/organization-attachment.entity';

export class OrganizationModel extends CustomerModel {
  private _FaxNumber: string;
  private _RegistrationNumber: string;
  private _Website: string;
  private _Logo: OrganizationAttachmentEntity;
  private _Branches: BranchEntity[];
  private _Attachments: OrganizationAttachmentEntity[];
  private _ContactPeoples: ContactPersonEntity[];
  private _BankAccounts: BankAccountEntity[];

  constructor() {
    super();
  }

  public createOrganization(
    organizationId: string,
    identificationNumber: string,
    registrationNumber: string,
    nameEn: string,
    nameBn: string,
    email: string,
    contactNumber: string,
    mobileNumber: string,
    phoneNumber: string,
    faxNumber: string,
    website: string,
    logo: OrganizationAttachmentEntity,
  ) {
    // Organization created business logic
    this.CustomerId = organizationId;
    this.IdentificationNumber = identificationNumber;
    this._RegistrationNumber = registrationNumber;
    this.NameEn = nameEn;
    this.NameBn = nameBn;
    this.Email = email;
    this.ContactNumber = contactNumber;
    this.MobileNumber = mobileNumber;
    this.PhoneNumber = phoneNumber;
    this._FaxNumber = faxNumber;
    this._Website = website;
    this._Logo = logo;
    this.apply('OrganizationCreatedEvent');
  }

  public updateOrganization(
    registrationNumber: string,
    nameEn: string,
    nameBn: string,
    email: string,
    contactNumber: string,
    mobileNumber: string,
    phoneNumber: string,
    faxNumber: string,
    website: string,
    logo: OrganizationAttachmentEntity,
  ) {
    // Organization updated business logic
    this._RegistrationNumber = registrationNumber;
    this.NameEn = nameEn;
    this.NameBn = nameBn;
    this.Email = email;
    this.ContactNumber = contactNumber;
    this.MobileNumber = mobileNumber;
    this.PhoneNumber = phoneNumber;
    this._FaxNumber = faxNumber;
    this._Website = website;
    this._Logo = logo;
    this.apply('OrganizationUpdatedEvent');
  }

  public addBranch(
    branchId: string,
    customerId: string,
    identificationNumber: string,
    nameEn: string,
    nameBn: string,
    email: string,
    contactNumber: string,
    mobileNumber: string,
    phoneNumber: string,
    faxNumber: string,
    website: string,
  ) {
    // Business logic for branch adding
    this.apply('BranchAddedEvent');
  }

  public deleteBranch(branchId: string) {
    // Business logic for deleting branch
    this.apply('BranchDeletedEvent');
  }

  public addAddress(
    addressId: string,
    addressType: AddressType,
    addressLineOne: string,
    addressLineTwo: string,
    country: string,
    state: string,
    city: string,
    division: string,
    district: string,
    subDistrict: string,
    zipCode: string,
  ) {
    // Business logic for address adding
    this.apply('AddressAddedEvent');
  }

  public deleteAddress(addressId: string) {
    // Business logic for deleting address
    this.apply('AddressDeletedEvent');
  }

  public addAttachment(
    attachmentId: string,
    documentTitle: OrganizationalDocumentType,
    fileUrl: string,
  ) {
    // Business logic for attachment adding
    this.apply('AttachmentAddedEvent');
  }

  public deleteAttachment(attachmentId: string) {
    // Business logic for deleting attachment
    this.apply('AttachmentDeletedEvent');
  }

  public addContactPerson(
    contactPersonId: string,
    customerId: string,
    identificationNumber: string,
    dateOfBirth: string,
    gender: Gender,
    nameEn: string,
    nameBn: string,
    bloodGroup: BloodGroup,
    religion: Religion,
    maritalStatus: MaritalStatus,
    profession: Profession,
    contactNumber: string,
    mobileNumber: string,
    phoneNumber: string,
    email: string,
    nid: string,
    birthRegistrationNumber: string,
  ) {
    // Business logic for contact person adding
    this.apply('ContactPersonAddedEvent');
  }

  public deleteContactPerson(contactPersonId: string) {
    // Business logic for deleting contact person
    this.apply('ContactPersonDeletedEvent');
  }

  public addBankAccount(
    bankAccountId: string,
    bankName: string,
    branch: string,
    routingNumber: string,
    accountNumber: string,
    accountName: string,
  ) {
    // Business logic for bank account adding
    this.apply('BankAccountAddedEvent');
  }

  public deleteBankAccount(bankAccountId: string) {
    // Business logic for deleting bank account
    this.apply('BankAccountDeletedEvent');
  }

  public get OrganizationId(): string {
    return this.CustomerId;
  }

  public get RegistrationNumber(): string {
    return this._RegistrationNumber;
  }
  public set RegistrationNumber(value: string) {
    this._RegistrationNumber = value;
  }

  public get FaxNumber(): string {
    return this._FaxNumber;
  }
  public set FaxNumber(value: string) {
    this._FaxNumber = value;
  }

  public get Website(): string {
    return this._Website;
  }
  public set Website(value: string) {
    this._Website = value;
  }

  public get Logo(): OrganizationAttachmentEntity {
    return this._Logo;
  }
  public set Logo(value: OrganizationAttachmentEntity) {
    this._Logo = value;
  }

  public get Branches(): BranchEntity[] {
    return this._Branches;
  }
  public set Branches(value: BranchEntity[]) {
    this._Branches = value;
  }

  public get Attachments(): OrganizationAttachmentEntity[] {
    return this._Attachments;
  }
  public set Attachments(value: OrganizationAttachmentEntity[]) {
    this._Attachments = value;
  }

  public get ContactPeoples(): ContactPersonEntity[] {
    return this._ContactPeoples;
  }
  public set ContactPeoples(value: ContactPersonEntity[]) {
    this._ContactPeoples = value;
  }

  public get BankAccounts(): BankAccountEntity[] {
    return this._BankAccounts;
  }
  public set BankAccounts(value: BankAccountEntity[]) {
    this._BankAccounts = value;
  }
}
