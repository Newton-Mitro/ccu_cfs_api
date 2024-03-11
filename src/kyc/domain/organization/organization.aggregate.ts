import { BaseEntity } from 'src/common/entities/base-entity';
import { AddressModel } from '../common/entities/address.entity';
import { BankAccountModel } from './entities/bank-account.entity';
import { ContactPersonModel } from './entities/contact-person.entity';
import { OrganizationAttachmentModel } from './entities/organization-attachment.entity';

export class OrganizationModel extends BaseEntity {
  private _IdentificationNumber: string;
  private _NameEn: string;
  private _NameBn: string;
  private _Email: string;
  private _ContactNumber: string;
  private _MobileNumber: string;
  private _PhoneNumber: string;
  private _FaxNumber: string;
  private _Website: string;
  private _ParentOrganization: string;
  private _Addresses: AddressModel[];
  private _Attachments: OrganizationAttachmentModel[];
  private _ContactPeoples: ContactPersonModel[];
  private _BankAccounts: BankAccountModel[];

  constructor(
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
    parentOrganization: string,
    addresses: AddressModel[],
    attachments: OrganizationAttachmentModel[],
    contactPeoples: ContactPersonModel[],
    bankAccounts: BankAccountModel[],
  ) {
    super(customerId);
    this._IdentificationNumber = identificationNumber;
    this._NameEn = nameEn;
    this._NameBn = nameBn;
    this._Email = email;
    this._ContactNumber = contactNumber;
    this._MobileNumber = mobileNumber;
    this._PhoneNumber = phoneNumber;
    this._FaxNumber = faxNumber;
    this._Website = website;
    this._ParentOrganization = parentOrganization;
    this._Addresses = addresses;
    this._Attachments = attachments;
    this._ContactPeoples = contactPeoples;
    this._BankAccounts = bankAccounts;
  }

  public get IdentificationNumber(): string {
    return this._IdentificationNumber;
  }

  public set IdentificationNumber(value: string) {
    this._IdentificationNumber = value;
  }

  public get NameEn(): string {
    return this._NameEn;
  }

  public set NameEn(value: string) {
    this._NameEn = value;
  }

  public get NameBn(): string {
    return this._NameBn;
  }

  public set NameBn(value: string) {
    this._NameBn = value;
  }

  public get Email(): string {
    return this._Email;
  }

  public set Email(value: string) {
    this._Email = value;
  }

  public get ContactNumber(): string {
    return this._ContactNumber;
  }

  public set ContactNumber(value: string) {
    this._ContactNumber = value;
  }

  public get MobileNumber(): string {
    return this._MobileNumber;
  }

  public set MobileNumber(value: string) {
    this._MobileNumber = value;
  }

  public get Addresses(): AddressModel[] {
    return this._Addresses;
  }

  public set Addresses(value: AddressModel[]) {
    this._Addresses = value;
  }

  public get Attachments(): OrganizationAttachmentModel[] {
    return this._Attachments;
  }

  public set Attachments(value: OrganizationAttachmentModel[]) {
    this._Attachments = value;
  }

  public get ParentOrganization(): string {
    return this._ParentOrganization;
  }

  public set ParentOrganization(value: string) {
    this._ParentOrganization = value;
  }

  public get PhoneNumber(): string {
    return this._PhoneNumber;
  }

  public set PhoneNumber(value: string) {
    this._PhoneNumber = value;
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

  public get ContactPeoples(): ContactPersonModel[] {
    return this._ContactPeoples;
  }

  public set ContactPeoples(value: ContactPersonModel[]) {
    this._ContactPeoples = value;
  }

  public get BankAccounts(): BankAccountModel[] {
    return this._BankAccounts;
  }

  public set BankAccounts(value: BankAccountModel[]) {
    this._BankAccounts = value;
  }
}
