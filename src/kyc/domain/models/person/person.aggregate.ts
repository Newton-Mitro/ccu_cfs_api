import { AggregateRoot } from '@nestjs/cqrs';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { PersonAddedEvent } from '../../events/person/person-added.event';
import { PersonUpdatedEvent } from '../../events/person/person-updated.event';
import { AddressModel, AddressProps } from '../common/address.model';
import { EducationModel, EducationProps } from './models/education.model';
import {
  EmploymentHistoryModel,
  EmploymentHistoryProps,
} from './models/employment-history.model';
import {
  FamilyAndRelativeModel,
  FamilyAndRelativeProps,
} from './models/family-and-relative.model';
import {
  PersonAttachmentModel,
  PersonAttachmentProps,
} from './models/person-attachment.model';
import { TrainingModel, TrainingProps } from './models/training.model';

export type PersonProps = {
  personId: string;
  identificationNumber: string;
  nameEn: string;
  nameBn: string;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: Date;
  gender: Gender;
  bloodGroup: BloodGroup;
  religion: Religion;
  maritalStatus: MaritalStatus;
  profession: Profession;
  nid: string;
  birthRegistrationNumber: string;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export class PersonAggregate extends AggregateRoot {
  private _personId: string;
  private _identificationNumber: string;
  private _nameEn: string;
  private _nameBn: string;
  private _contactNumber: string;
  private _mobileNumber: string;
  private _phoneNumber: string;
  private _email: string;
  private _dateOfBirth: Date;
  private _gender: Gender;
  private _bloodGroup: BloodGroup;
  private _religion: Religion;
  private _maritalStatus: MaritalStatus;
  private _profession: Profession;
  private _nid: string;
  private _birthRegistrationNumber: string;
  private _photo: string;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _createdBy: string;
  private _updatedBy: string;
  private _addresses: AddressModel[];
  private _familyTree: FamilyAndRelativeModel[];
  private _educations: EducationModel[];
  private _trainings: TrainingModel[];
  private _employmentHistories: EmploymentHistoryModel[];
  private _attachments: PersonAttachmentModel[];

  constructor(personProps: PersonProps) {
    super();
    this._personId = personProps.personId;
    this._identificationNumber = personProps.identificationNumber;
    this._nameEn = personProps.nameEn;
    this._nameBn = personProps.nameBn;
    this._contactNumber = personProps.contactNumber;
    this._mobileNumber = personProps.mobileNumber;
    this._phoneNumber = personProps.phoneNumber;
    this._email = personProps.email;
    this._dateOfBirth = personProps.dateOfBirth;
    this._gender = personProps.gender;
    this._bloodGroup = personProps.bloodGroup;
    this._religion = personProps.religion;
    this._maritalStatus = personProps.maritalStatus;
    this._profession = personProps.profession;
    this._nid = personProps.nid;
    this._birthRegistrationNumber = personProps.birthRegistrationNumber;
    this._photo = personProps.photo;
    this._createdAt = new Date();
    this._updatedAt = personProps.updatedAt;
    this._createdBy = personProps.createdBy;
    this._updatedBy = personProps.updatedBy;
    this.apply(new PersonAddedEvent(personProps.personId));
  }

  public updatePerson(personProps: PersonProps) {
    this._personId = personProps.personId;
    this._identificationNumber = personProps.identificationNumber;
    this._nameEn = personProps.nameEn;
    this._nameBn = personProps.nameBn;
    this._contactNumber = personProps.contactNumber;
    this._mobileNumber = personProps.mobileNumber;
    this._phoneNumber = personProps.phoneNumber;
    this._email = personProps.email;
    this._dateOfBirth = personProps.dateOfBirth;
    this._gender = personProps.gender;
    this._bloodGroup = personProps.bloodGroup;
    this._religion = personProps.religion;
    this._maritalStatus = personProps.maritalStatus;
    this._profession = personProps.profession;
    this._nid = personProps.nid;
    this._birthRegistrationNumber = personProps.birthRegistrationNumber;
    this._photo = personProps.photo;
    this._createdAt = personProps.createdAt;
    this._updatedAt = new Date();
    this._createdBy = personProps.createdBy;
    this._updatedBy = personProps.updatedBy;
    this.apply(new PersonUpdatedEvent(personProps.personId));
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

  public addToFamilyTree(familyAndRelativeProps: FamilyAndRelativeProps) {
    this._familyTree.push(new FamilyAndRelativeModel(familyAndRelativeProps));
    // Business logic for adding family member to family tree
    this.apply('FamilyMemberAddedEvent');
  }

  public removeFromFamilyTree(familyTreeId: string) {
    // Business logic for deleting family member from family tree
    this.apply('FamilyMemberDeletedEvent');
  }

  public addAttachment(personAttachmentProps: PersonAttachmentProps) {
    this._attachments.push(new PersonAttachmentModel(personAttachmentProps));
    // Business logic for attachment adding
    this.apply('AttachmentAddedEvent');
  }

  public deleteAttachment(attachmentId: string) {
    // Business logic for deleting attachment
    this.apply('AttachmentDeletedEvent');
  }

  public addEducation(educationProps: EducationProps) {
    this._educations.push(new EducationModel(educationProps));
    this.apply('EducationAddedEvent');
  }

  public deleteEducation(educationId: string) {
    // Business logic for deleting education
    this.apply('EducationDeletedEvent');
  }

  public addTraining(trainingProps: TrainingProps) {
    this._trainings.push(new TrainingModel(trainingProps));
    this.apply('TrainingAddedEvent');
  }

  public deleteTraining(trainingId: string) {
    // Business logic for deleting training
    this.apply('TrainingDeletedEvent');
  }

  public addEmploymentHistory(employmentHistoryProps: EmploymentHistoryProps) {
    this._employmentHistories.push(
      new EmploymentHistoryModel(employmentHistoryProps),
    );
    this.apply('EmploymentHistoryAddedEvent');
  }

  public deleteEmploymentHistory(employmentHistoryId: string) {
    // Business logic for deleting employment history
    this.apply('EmploymentHistoryDeletedEvent');
  }

  public get personId(): string {
    return this._personId;
  }

  public get identificationNumber(): string {
    return this._identificationNumber;
  }

  public get nameEn(): string {
    return this._nameEn;
  }

  public get nameBn(): string {
    return this._nameBn;
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

  public get email(): string {
    return this._email;
  }

  public get dateOfBirth(): Date {
    return this._dateOfBirth;
  }

  public get gender(): Gender {
    return this._gender;
  }

  public get bloodGroup(): BloodGroup {
    return this._bloodGroup;
  }

  public get religion(): Religion {
    return this._religion;
  }

  public get maritalStatus(): MaritalStatus {
    return this._maritalStatus;
  }

  public get profession(): Profession {
    return this._profession;
  }

  public get nid(): string {
    return this._nid;
  }

  public get birthRegistrationNumber(): string {
    return this._birthRegistrationNumber;
  }

  public get photo(): string {
    return this._photo;
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

  public get familyTree(): FamilyAndRelativeModel[] {
    return this._familyTree;
  }

  public get educations(): EducationModel[] {
    return this._educations;
  }

  public get trainings(): TrainingModel[] {
    return this._trainings;
  }

  public get employmentHistories(): EmploymentHistoryModel[] {
    return this._employmentHistories;
  }

  public get attachments(): PersonAttachmentModel[] {
    return this._attachments;
  }
}
