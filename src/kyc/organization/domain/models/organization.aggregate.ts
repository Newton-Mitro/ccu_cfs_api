import { AggregateRoot } from '@nestjs/cqrs';
import {
  AddressModel,
  AddressProps,
} from '../../../shared/domain/models/address.model';
import { BankAccountModel } from './bank-account.model';
import { BranchModel } from './branch.model';
import { ContactPersonModel } from './contact-person.model';
import { OrganizationAttachmentModel } from './organization-attachment.model';
import { OrganizationProps } from './organization.model';

export class OrganizationAggregate extends AggregateRoot {
  readonly organizationId: string;
  readonly identificationNumber: string;
  readonly registrationNumber: string;
  readonly tin: string;
  readonly nameEn: string;
  readonly nameBn: string;
  readonly email: string;
  readonly contactNumber: string;
  readonly mobileNumber: string;
  readonly phoneNumber: string;
  readonly fax: string;
  readonly website: string;
  readonly logo: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly createdBy: string;
  readonly updatedBy: string;
  private _addresses: AddressModel[];
  private _branches: BranchModel[];
  private _attachments: OrganizationAttachmentModel[];
  private _contactPeoples: ContactPersonModel[];
  private _bankAccounts: BankAccountModel[];

  constructor(organizationProps: OrganizationProps) {
    super();
    this.organizationId = organizationProps.organizationId;
    this.identificationNumber = organizationProps.identificationNumber;
    this.registrationNumber = organizationProps.registrationNumber;
    this.tin = organizationProps.tin;
    this.nameEn = organizationProps.nameEn;
    this.nameBn = organizationProps.nameBn;
    this.email = organizationProps.email;
    this.contactNumber = organizationProps.contactNumber;
    this.mobileNumber = organizationProps.mobileNumber;
    this.phoneNumber = organizationProps.phoneNumber;
    this.fax = organizationProps.fax;
    this.website = organizationProps.website;
    this.logo = organizationProps.logo;
    this.createdAt = organizationProps.createdAt;
    this.updatedAt = organizationProps.updatedAt;
    this.createdBy = organizationProps.createdBy;
    this.updatedBy = organizationProps.updatedBy;
  }

  public addBranch() {
    // Business logic for branch adding
    this.apply('BranchAddedEvent');
  }

  public deleteBranch(branchId: string) {
    // Business logic for deleting branch
    this.apply('BranchDeletedEvent');
  }

  public addAddress(addressProps: AddressProps) {
    this._addresses.push(new AddressModel(addressProps));
    // Business logic for address adding
    this.apply('AddressAddedEvent');
  }

  public deleteAddress(addressId: string) {
    // Business logic for deleting address
    this.apply('AddressDeletedEvent');
  }

  public addAttachment() {
    // Business logic for attachment adding
    this.apply('AttachmentAddedEvent');
  }

  public deleteAttachment(attachmentId: string) {
    // Business logic for deleting attachment
    this.apply('AttachmentDeletedEvent');
  }

  public addContactPerson() {
    // Business logic for contact person adding
    this.apply('ContactPersonAddedEvent');
  }

  public deleteContactPerson(contactPersonId: string) {
    // Business logic for deleting contact person
    this.apply('ContactPersonDeletedEvent');
  }

  public addBankAccount() {
    // Business logic for bank account adding
    this.apply('BankAccountAddedEvent');
  }

  public deleteBankAccount(bankAccountId: string) {
    // Business logic for deleting bank account
    this.apply('BankAccountDeletedEvent');
  }

  public get addresses(): AddressModel[] {
    return this._addresses;
  }

  public get branches(): BranchModel[] {
    return this._branches;
  }

  public get attachments(): OrganizationAttachmentModel[] {
    return this._attachments;
  }

  public get contactPeoples(): ContactPersonModel[] {
    return this._contactPeoples;
  }

  public get bankAccounts(): BankAccountModel[] {
    return this._bankAccounts;
  }
}
