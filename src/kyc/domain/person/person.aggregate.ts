import { BaseEntity } from 'src/common/entities/base-entity';
import { BloodGroup } from '../../../common/enums/blood-group.enum';
import { Gender } from '../../../common/enums/gender.enum';
import { MaritalStatus } from '../../../common/enums/marital-status.enum';
import { Profession } from '../../../common/enums/profession.enum';
import { Religion } from '../../../common/enums/religion.enum';
import { AddressEntity } from '../common/entities/address.entity';
import { KYCAttachment } from '../common/entities/kyc-attachment.entity';
import { Education } from './entities/education.entity';
import { EmploymentHistory } from './entities/employment-history.entity';
import { FamilyAndRelative } from './entities/family-and-relative.entity';
import { Training } from './entities/training.entity';

export class Person extends BaseEntity {
  private _IdentificationNumber: string;
  private _DateOfBirth: string;
  private _Gender: Gender;
  private _NameEn: string;
  private _NameBn: string;
  private _BloodGroup: BloodGroup;
  private _Religion: Religion;
  private _MaritalStatus: MaritalStatus;
  private _Profession: Profession;
  private _ContactNumber: string;
  private _MobileNumber: string;
  private _PhoneNumber: string;
  private _Email: string;
  private _NID: string;
  private _BirthRegistrationNumber: string;
  private _Addresses: AddressEntity[];
  private _FamilyTree: FamilyAndRelative[];
  private _Educations: Education[];
  private _Trainings: Training[];
  private _EmploymentHistories: EmploymentHistory[];
  private _Photo: KYCAttachment;

  constructor(
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
    addresses: AddressEntity[],
    familyTree: FamilyAndRelative[],
    educations: Education[],
    trainings: Training[],
    employmentHistories: EmploymentHistory[],
    photo: KYCAttachment,
  ) {
    super(customerId);
    this._IdentificationNumber = identificationNumber;
    this._DateOfBirth = dateOfBirth;
    this._Gender = gender;
    this._NameEn = nameEn;
    this._NameBn = nameBn;
    this._BloodGroup = bloodGroup;
    this._Religion = religion;
    this._MaritalStatus = maritalStatus;
    this._Profession = profession;
    this._ContactNumber = contactNumber;
    this._MobileNumber = mobileNumber;
    this._PhoneNumber = phoneNumber;
    this._Email = email;
    this._NID = nid;
    this._BirthRegistrationNumber = birthRegistrationNumber;
    this._Addresses = addresses;
    this._FamilyTree = familyTree;
    this._Educations = educations;
    this._Trainings = trainings;
    this._EmploymentHistories = employmentHistories;
    this._Photo = photo;
  }

  public updateBasicInformation(
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
    this._DateOfBirth = dateOfBirth;
    this._Gender = gender;
    this._NameEn = nameEn;
    this._NameBn = nameBn;
    this._BloodGroup = bloodGroup;
    this._Religion = religion;
    this._MaritalStatus = maritalStatus;
    this._Profession = profession;
    this._ContactNumber = contactNumber;
    this._MobileNumber = mobileNumber;
    this._PhoneNumber = phoneNumber;
    this._Email = email;
    this._NID = nid;
    this._BirthRegistrationNumber = birthRegistrationNumber;
    // Publish Event: PersonsBasicInformationUpdatedEvent
  }

  public addAddress(address: AddressEntity) {
    // Publish Event: PersonsAddressAddedEvent
  }

  public removeAddress(addressId: string) {
    // Publish Event: PersonsAddressRemovedEvent
  }

  public addToFamilyTree(familyAndRelative: FamilyAndRelative) {
    // Publish Event: FamilyAndRelativeAddedEvent
  }

  public removeFromFamilyTree(familyTreeId: string) {
    // Publish Event: FamilyAndRelativeRemovedEvent
  }

  public addAttachment(attachment: KYCAttachment) {
    // Publish Event: PersonsAttachmentAddedEvent
  }

  public removeAttachment(attachmentId: string) {
    // Publish Event: PersonsAttachmentRemovedEvent
  }

  public get IdentificationNumber(): string {
    return this._IdentificationNumber;
  }

  public get NameEn(): string {
    return this._NameEn;
  }

  public get NameBn(): string {
    return this._NameBn;
  }

  public get Email(): string {
    return this._Email;
  }

  public get ContactNumber(): string {
    return this._ContactNumber;
  }

  public get PhoneNumber(): string {
    return this._PhoneNumber;
  }

  public get MobileNumber(): string {
    return this._MobileNumber;
  }

  public get DateOfBirth(): string {
    return this._DateOfBirth;
  }

  public get NID(): string {
    return this._NID;
  }

  public get BirthRegistrationNumber(): string {
    return this._BirthRegistrationNumber;
  }

  public get BloodGroup(): BloodGroup {
    return this._BloodGroup;
  }

  public get Gender(): Gender {
    return this._Gender;
  }

  public get Religion(): Religion {
    return this._Religion;
  }

  public get Profession(): Profession {
    return this._Profession;
  }

  public get MaritalStatus(): MaritalStatus {
    return this._MaritalStatus;
  }

  public get Addresses(): AddressEntity[] {
    return this._Addresses;
  }

  public get FamilyTree(): FamilyAndRelative[] {
    return this._FamilyTree;
  }

  public get Educations(): Education[] {
    return this._Educations;
  }

  public get Trainings(): Training[] {
    return this._Trainings;
  }

  public get EmploymentHistories(): EmploymentHistory[] {
    return this._EmploymentHistories;
  }

  public get Photo(): KYCAttachment {
    return this._Photo;
  }
}
