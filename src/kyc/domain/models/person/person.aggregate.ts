import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { PersonalDocumentType } from '../../enums/kyc-attachment-type.enum';
import { AddressType } from '../../enums/person-address-type.enum';
import { CustomerModel } from '../common/customer.model';
import { EducationEntity } from './entities/education.entity';
import { EmploymentHistoryEntity } from './entities/employment-history.entity';
import { FamilyAndRelativeEntity } from './entities/family-and-relative.entity';
import { PersonAttachmentEntity } from './entities/person-attachment.entity';
import { TrainingEntity } from './entities/training.entity';

export class PersonModel extends CustomerModel {
  private _PersonId: string;
  private _DateOfBirth: string;
  private _Gender: Gender;
  private _BloodGroup: BloodGroup;
  private _Religion: Religion;
  private _MaritalStatus: MaritalStatus;
  private _Profession: Profession;
  private _NID: string;
  private _BirthRegistrationNumber: string;
  private _Photo: PersonAttachmentEntity;
  private _FamilyTree: FamilyAndRelativeEntity[];
  private _Educations: EducationEntity[];
  private _Trainings: TrainingEntity[];
  private _EmploymentHistories: EmploymentHistoryEntity[];
  private _Attachments: PersonAttachmentEntity[];

  constructor() {
    super();
  }

  public createPerson(
    personId: string,
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
    this._PersonId = personId;
    this.IdentificationNumber = identificationNumber;
    this._DateOfBirth = dateOfBirth;
    this._Gender = gender;
    this.NameEn = nameEn;
    this.NameBn = nameBn;
    this._BloodGroup = bloodGroup;
    this._Religion = religion;
    this._MaritalStatus = maritalStatus;
    this._Profession = profession;
    this.ContactNumber = contactNumber;
    this.MobileNumber = mobileNumber;
    this.PhoneNumber = phoneNumber;
    this.Email = email;
    this._NID = nid;
    this._BirthRegistrationNumber = birthRegistrationNumber;
    // Publish Event: PersonCreatedEvent
    this.apply('PersonCreatedEvent');
  }

  public updatePerson(
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
    this.NameEn = nameEn;
    this.NameBn = nameBn;
    this._BloodGroup = bloodGroup;
    this._Religion = religion;
    this._MaritalStatus = maritalStatus;
    this._Profession = profession;
    this.ContactNumber = contactNumber;
    this.MobileNumber = mobileNumber;
    this.PhoneNumber = phoneNumber;
    this.Email = email;
    this._NID = nid;
    this._BirthRegistrationNumber = birthRegistrationNumber;
    // Publish Event: PersonUpdatedEvent
    this.apply('PersonUpdatedEvent');
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

  public addToFamilyTree(
    customerId: string,
    familyTreeId: string,
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
    photo: PersonAttachmentEntity,
  ) {
    // Business logic for adding family member to family tree
    this.apply('FamilyMemberAddedEvent');
  }

  public removeFromFamilyTree(familyTreeId: string) {
    // Business logic for deleting family member from family tree
    this.apply('FamilyMemberDeletedEvent');
  }

  public addAttachment(
    attachmentId: string,
    documentTitle: PersonalDocumentType,
    fileUrl: string,
  ) {
    // Business logic for attachment adding
    this.apply('AttachmentAddedEvent');
  }

  public deleteAttachment(attachmentId: string) {
    // Business logic for deleting attachment
    this.apply('AttachmentDeletedEvent');
  }

  public addEducation(
    educationId: string,
    educationLevel: string,
    educationDegree: string,
    instituteName: string,
    majorSubject: string,
    passingYear: string,
    grade: string,
  ) {
    this.apply('EducationAddedEvent');
  }

  public deleteEducation(educationId: string) {
    // Business logic for deleting education
    this.apply('EducationDeletedEvent');
  }

  public addTraining(
    trainingId: string,
    courseTitle: string,
    instituteName: string,
    courseContent: string,
    result: string,
    startDate: string,
    endDate: string,
  ) {
    this.apply('TrainingAddedEvent');
  }

  public deleteTraining(trainingId: string) {
    // Business logic for deleting training
    this.apply('TrainingDeletedEvent');
  }

  public addEmploymentHistory(
    educationHistoryId: string,
    organizationName: string,
    position: string,
    address: string,
    supervisorName: string,
    supervisorDesignation: string,
    supervisorPhone: string,
    jobResponsibilities: string,
    salary: number,
    startDate: string,
    endDate: string,
    tillNow: boolean,
  ) {
    this.apply('EmploymentHistoryAddedEvent');
  }

  public deleteEmploymentHistory(employmentHistoryId: string) {
    // Business logic for deleting employment history
    this.apply('EmploymentHistoryDeletedEvent');
  }

  public get PersonId(): string {
    return this._PersonId;
  }
  public set PersonId(value: string) {
    this._PersonId = value;
  }

  public get DateOfBirth(): string {
    return this._DateOfBirth;
  }
  public set DateOfBirth(value: string) {
    this._DateOfBirth = value;
  }

  public get Gender(): Gender {
    return this._Gender;
  }
  public set Gender(value: Gender) {
    this._Gender = value;
  }

  public get BloodGroup(): BloodGroup {
    return this._BloodGroup;
  }
  public set BloodGroup(value: BloodGroup) {
    this._BloodGroup = value;
  }

  public get Religion(): Religion {
    return this._Religion;
  }
  public set Religion(value: Religion) {
    this._Religion = value;
  }

  public get MaritalStatus(): MaritalStatus {
    return this._MaritalStatus;
  }
  public set MaritalStatus(value: MaritalStatus) {
    this._MaritalStatus = value;
  }

  public get Profession(): Profession {
    return this._Profession;
  }
  public set Profession(value: Profession) {
    this._Profession = value;
  }

  public get NID(): string {
    return this._NID;
  }
  public set NID(value: string) {
    this._NID = value;
  }

  public get BirthRegistrationNumber(): string {
    return this._BirthRegistrationNumber;
  }
  public set BirthRegistrationNumber(value: string) {
    this._BirthRegistrationNumber = value;
  }

  public get FamilyTree(): FamilyAndRelativeEntity[] {
    return this._FamilyTree;
  }
  public set FamilyTree(value: FamilyAndRelativeEntity[]) {
    this._FamilyTree = value;
  }

  public get Educations(): EducationEntity[] {
    return this._Educations;
  }
  public set Educations(value: EducationEntity[]) {
    this._Educations = value;
  }

  public get Trainings(): TrainingEntity[] {
    return this._Trainings;
  }
  public set Trainings(value: TrainingEntity[]) {
    this._Trainings = value;
  }

  public get EmploymentHistories(): EmploymentHistoryEntity[] {
    return this._EmploymentHistories;
  }
  public set EmploymentHistories(value: EmploymentHistoryEntity[]) {
    this._EmploymentHistories = value;
  }

  public get Attachments(): PersonAttachmentEntity[] {
    return this._Attachments;
  }
  public set Attachments(value: PersonAttachmentEntity[]) {
    this._Attachments = value;
  }

  public get Photo(): PersonAttachmentEntity {
    return this._Photo;
  }
  public set Photo(value: PersonAttachmentEntity) {
    this._Photo = value;
  }
}
