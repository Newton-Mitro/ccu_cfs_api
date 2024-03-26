import { AggregateRoot } from '@nestjs/cqrs';
import { Country } from 'src/common/enums/country.enum';
import { AddressType } from '../../enums/person-address-type.enum';
import { AddressModel } from '../common/address.model';
import { BankAccountModel } from './models/bank-account.model';
import { BranchModel } from './models/branch.model';
import { ContactPersonModel } from './models/contact-person.model';
import { OrganizationAttachmentModel } from './models/organization-attachment.model';
import { OrganizationModel } from './models/organization.model';

export class OrganizationAggregate extends AggregateRoot {
  private _Organization: OrganizationModel;
  private _Addresses: AddressModel[];
  private _Branches: BranchModel[];
  private _Attachments: OrganizationAttachmentModel[];
  private _ContactPeoples: ContactPersonModel[];
  private _BankAccounts: BankAccountModel[];

  constructor() {
    super();
  }

  public createOrganization() {
    // Organization created business logic

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

  public addAddress(
    addressId: string,
    addressType: AddressType,
    addressLineOne: string,
    addressLineTwo: string,
    country: Country,
    state: string,
    city: string,
    division: string,
    district: string,
    subDistrict: string,
    zipCode: string,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    this._Addresses.push(
      new AddressModel(
        addressId,
        addressType,
        addressLineOne,
        addressLineTwo,
        country,
        state,
        city,
        division,
        district,
        subDistrict,
        zipCode,
        createdAt,
        updatedAt,
        createdBy,
        updatedBy,
      ),
    );
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

  public get Organization(): OrganizationModel {
    return this._Organization;
  }

  public get Addresses(): AddressModel[] {
    return this._Addresses;
  }

  public get Branches(): BranchModel[] {
    return this._Branches;
  }

  public get Attachments(): OrganizationAttachmentModel[] {
    return this._Attachments;
  }

  public get ContactPeoples(): ContactPersonModel[] {
    return this._ContactPeoples;
  }

  public get BankAccounts(): BankAccountModel[] {
    return this._BankAccounts;
  }
}
