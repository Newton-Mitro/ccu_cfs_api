import { AggregateRoot } from '@nestjs/cqrs';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
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
  readonly personId: string;
  readonly identificationNumber: string;
  readonly nameEn: string;
  readonly nameBn: string;
  readonly contactNumber: string;
  readonly mobileNumber: string;
  readonly phoneNumber: string;
  readonly email: string;
  readonly dateOfBirth: Date;
  readonly gender: Gender;
  readonly bloodGroup: BloodGroup;
  readonly religion: Religion;
  readonly maritalStatus: MaritalStatus;
  readonly profession: Profession;
  readonly nid: string;
  readonly birthRegistrationNumber: string;
  readonly photo: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly createdBy: string;
  readonly updatedBy: string;
  private _addresses: AddressModel[];
  private _familyTree: FamilyAndRelativeModel[];
  private _educations: EducationModel[];
  private _trainings: TrainingModel[];
  private _employmentHistories: EmploymentHistoryModel[];
  private _attachments: PersonAttachmentModel[];

  constructor(personProps: PersonProps) {
    super();
    this.personId = personProps.personId;
    this.identificationNumber = personProps.identificationNumber;
    this.nameEn = personProps.nameEn;
    this.nameBn = personProps.nameBn;
    this.contactNumber = personProps.contactNumber;
    this.mobileNumber = personProps.mobileNumber;
    this.phoneNumber = personProps.phoneNumber;
    this.email = personProps.email;
    this.dateOfBirth = personProps.dateOfBirth;
    this.gender = personProps.gender;
    this.bloodGroup = personProps.bloodGroup;
    this.religion = personProps.religion;
    this.maritalStatus = personProps.maritalStatus;
    this.profession = personProps.profession;
    this.nid = personProps.nid;
    this.birthRegistrationNumber = personProps.birthRegistrationNumber;
    this.photo = personProps.photo;
    this.createdAt = personProps.createdAt;
    this.updatedAt = personProps.updatedAt;
    this.createdBy = personProps.createdBy;
    this.updatedBy = personProps.updatedBy;
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
