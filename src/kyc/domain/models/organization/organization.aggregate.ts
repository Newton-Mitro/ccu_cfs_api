import { AggregateRoot } from '@nestjs/cqrs';
import { AddressModel, AddressProps } from '../common/address.model';
import { BankAccountModel } from './models/bank-account.model';
import { BranchModel } from './models/branch.model';
import { ContactPersonModel } from './models/contact-person.model';
import { OrganizationAttachmentModel } from './models/organization-attachment.model';
import { OrganizationProps } from './models/organization.model';

export class OrganizationAggregate extends AggregateRoot {
  private _organizationId: string;
  private _identificationNumber: string;
  private _registrationNumber: string;
  private _tin: string;
  private _nameEn: string;
  private _nameBn: string;
  private _email: string;
  private _contactNumber: string;
  private _mobileNumber: string;
  private _phoneNumber: string;
  private _fax: string;
  private _website: string;
  private _logo: string;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _createdBy: string;
  private _updatedBy: string;
  private _addresses: AddressModel[];
  private _branches: BranchModel[];
  private _attachments: OrganizationAttachmentModel[];
  private _contactPeoples: ContactPersonModel[];
  private _bankAccounts: BankAccountModel[];

  constructor() {
    super();
  }

  public addOrganization(organizationProps: OrganizationProps) {
    // Organization created business logic
    this._organizationId = organizationProps.organizationId;
    this._identificationNumber = organizationProps.identificationNumber;
    this._registrationNumber = organizationProps.registrationNumber;
    this._tin = organizationProps.tin;
    this._nameEn = organizationProps.nameEn;
    this._nameBn = organizationProps.nameBn;
    this._email = organizationProps.email;
    this._contactNumber = organizationProps.contactNumber;
    this._mobileNumber = organizationProps.mobileNumber;
    this._phoneNumber = organizationProps.phoneNumber;
    this._fax = organizationProps.fax;
    this._website = organizationProps.website;
    this._logo = organizationProps.logo;
    this._createdAt = organizationProps.createdAt;
    this._updatedAt = organizationProps.updatedAt;
    this._createdBy = organizationProps.createdBy;
    this._updatedBy = organizationProps.updatedBy;

    this.apply('OrganizationCreatedEvent');
  }

  public updateOrganization() {
    // Organization updated business logic

    this.apply('OrganizationUpdatedEvent');
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

  public get organizationId(): string {
    return this._organizationId;
  }

  public get identificationNumber(): string {
    return this._identificationNumber;
  }

  public get registrationNumber(): string {
    return this._registrationNumber;
  }

  public get tin(): string {
    return this._tin;
  }

  public get nameEn(): string {
    return this._nameEn;
  }

  public get nameBn(): string {
    return this._nameBn;
  }

  public get email(): string {
    return this._email;
  }

  public get contactNumber(): string {
    return this._contactNumber;
  }

  public get mobileNumber(): string {
    return this._mobileNumber;
  }

  public get phoneNumber(): string {
    return this._phoneNumber;
  }

  public get fax(): string {
    return this._fax;
  }

  public get website(): string {
    return this._website;
  }

  public get logo(): string {
    return this._logo;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public get createdBy(): string {
    return this._createdBy;
  }

  public get updatedBy(): string {
    return this._updatedBy;
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
