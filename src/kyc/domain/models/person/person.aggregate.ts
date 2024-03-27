import { AggregateRoot } from '@nestjs/cqrs';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Country } from 'src/common/enums/country.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Relationship } from 'src/common/enums/relationship.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { FamilyTreeStatus } from '../../enums/family-tree-status.enum';
import { PersonalDocumentType } from '../../enums/kyc-attachment-type.enum';
import { AddressType } from '../../enums/person-address-type.enum';
import { AddressModel } from '../common/address.model';
import { EducationModel } from './models/education.model';
import { EmploymentHistoryModel } from './models/employment-history.model';
import { FamilyAndRelativeModel } from './models/family-and-relative.model';
import { PersonAttachmentModel } from './models/person-attachment.model';
import { TrainingModel } from './models/training.model';

export class PersonAggregate extends AggregateRoot {
  private _PersonId: string;
  private _IdentificationNumber: string;
  private _NameEn: string;
  private _NameBn: string;
  private _ContactNumber: string;
  private _MobileNumber: string;
  private _PhoneNumber: string;
  private _Email: string;
  private _CustomerType: string;
  private _DateOfBirth: Date;
  private _Gender: Gender;
  private _BloodGroup: BloodGroup;
  private _Religion: Religion;
  private _MaritalStatus: MaritalStatus;
  private _Profession: Profession;
  private _NID: string;
  private _BirthRegistrationNumber: string;
  private _Photo: string;
  protected _CreatedAt: Date;
  protected _UpdatedAt: Date;
  protected _CreatedBy: string;
  protected _UpdatedBy: string;
  private _Addresses: AddressModel[];
  private _FamilyTree: FamilyAndRelativeModel[];
  private _Educations: EducationModel[];
  private _Trainings: TrainingModel[];
  private _EmploymentHistories: EmploymentHistoryModel[];
  private _Attachments: PersonAttachmentModel[];

  constructor() {
    super();
  }

  public addPerson(
    personId: string,
    identificationNumber: string,
    nameEn: string,
    nameBn: string,
    contactNumber: string,
    mobileNumber: string,
    phoneNumber: string,
    email: string,
    customerType: string,
    dateOfBirth: Date,
    gender: Gender,
    bloodGroup: BloodGroup,
    religion: Religion,
    maritalStatus: MaritalStatus,
    profession: Profession,
    nid: string,
    birthRegistrationNumber: string,
    photo: string,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    // NID or BRN needed
    this._PersonId = personId;
    this._IdentificationNumber = identificationNumber;
    this._NameEn = nameEn;
    this._NameBn = nameBn;
    this._ContactNumber = contactNumber;
    this._MobileNumber = mobileNumber;
    this._PhoneNumber = phoneNumber;
    this._Email = email;
    this._CustomerType = customerType;
    this._DateOfBirth = dateOfBirth;
    this._Gender = gender;
    this._BloodGroup = bloodGroup;
    this._Religion = religion;
    this._MaritalStatus = maritalStatus;
    this._Profession = profession;
    this._NID = nid;
    this._BirthRegistrationNumber = birthRegistrationNumber;
    this._Photo = photo;
    this._CreatedAt = createdAt;
    this._UpdatedAt = updatedAt;
    this._CreatedBy = createdBy;
    this._UpdatedBy = updatedBy;
    this.apply('PersonCreatedEvent');
  }

  public updatePerson() {
    // Publish Event: PersonUpdatedEvent
    this.apply('PersonUpdatedEvent');
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

  public addToFamilyTree(
    familyTreeId: string,
    personId: string,
    identificationNumber: string,
    nameEn: string,
    nameBn: string,
    contactNumber: string,
    mobileNumber: string,
    phoneNumber: string,
    email: string,
    customerType: string,
    dateOfBirth: Date,
    gender: Gender,
    bloodGroup: BloodGroup,
    religion: Religion,
    maritalStatus: MaritalStatus,
    profession: Profession,
    nid: string,
    birthRegistrationNumber: string,
    photo: string,
    relationship: Relationship,
    status: FamilyTreeStatus,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    this._FamilyTree.push(
      new FamilyAndRelativeModel(
        familyTreeId,
        personId,
        identificationNumber,
        nameEn,
        nameBn,
        contactNumber,
        mobileNumber,
        phoneNumber,
        email,
        customerType,
        dateOfBirth,
        gender,
        bloodGroup,
        religion,
        maritalStatus,
        profession,
        nid,
        birthRegistrationNumber,
        photo,
        relationship,
        status,
        createdAt,
        updatedAt,
        createdBy,
        updatedBy,
      ),
    );
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
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    this._Attachments.push(
      new PersonAttachmentModel(
        attachmentId,
        documentTitle,
        fileUrl,
        createdAt,
        updatedAt,
        createdBy,
        updatedBy,
      ),
    );
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
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    this._Educations.push(
      new EducationModel(
        educationId,
        educationLevel,
        educationDegree,
        instituteName,
        majorSubject,
        passingYear,
        grade,
        createdAt,
        updatedAt,
        createdBy,
        updatedBy,
      ),
    );
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
    startDate: Date,
    endDate: Date,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    this._Trainings.push(
      new TrainingModel(
        trainingId,
        courseTitle,
        instituteName,
        courseContent,
        result,
        startDate,
        endDate,
        createdAt,
        updatedAt,
        createdBy,
        updatedBy,
      ),
    );
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
    startDate: Date,
    endDate: Date,
    tillNow: boolean,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    this._EmploymentHistories.push(
      new EmploymentHistoryModel(
        educationHistoryId,
        organizationName,
        position,
        address,
        supervisorName,
        supervisorDesignation,
        supervisorPhone,
        jobResponsibilities,
        salary,
        startDate,
        endDate,
        tillNow,
        createdAt,
        updatedAt,
        createdBy,
        updatedBy,
      ),
    );
    this.apply('EmploymentHistoryAddedEvent');
  }

  public deleteEmploymentHistory(employmentHistoryId: string) {
    // Business logic for deleting employment history
    this.apply('EmploymentHistoryDeletedEvent');
  }

  public get PersonId(): string {
    return this._PersonId;
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

  public get ContactNumber(): string {
    return this._ContactNumber;
  }

  public get MobileNumber(): string {
    return this._MobileNumber;
  }

  public get PhoneNumber(): string {
    return this._PhoneNumber;
  }

  public get Email(): string {
    return this._Email;
  }

  public get CustomerType(): string {
    return this._CustomerType;
  }

  public get DateOfBirth(): Date {
    return this._DateOfBirth;
  }

  public get Gender(): Gender {
    return this._Gender;
  }

  public get BloodGroup(): BloodGroup {
    return this._BloodGroup;
  }

  public get Religion(): Religion {
    return this._Religion;
  }

  public get MaritalStatus(): MaritalStatus {
    return this._MaritalStatus;
  }

  public get Profession(): Profession {
    return this._Profession;
  }

  public get NID(): string {
    return this._NID;
  }

  public get BirthRegistrationNumber(): string {
    return this._BirthRegistrationNumber;
  }

  public get Photo(): string {
    return this._Photo;
  }

  public get CreatedAt(): Date {
    return this._CreatedAt;
  }

  public get UpdatedAt(): Date {
    return this._UpdatedAt;
  }

  public get CreatedBy(): string {
    return this._CreatedBy;
  }

  public get UpdatedBy(): string {
    return this._UpdatedBy;
  }

  public get Addresses(): AddressModel[] {
    return this._Addresses;
  }

  public get FamilyTree(): FamilyAndRelativeModel[] {
    return this._FamilyTree;
  }

  public get Educations(): EducationModel[] {
    return this._Educations;
  }

  public get Trainings(): TrainingModel[] {
    return this._Trainings;
  }

  public get EmploymentHistories(): EmploymentHistoryModel[] {
    return this._EmploymentHistories;
  }

  public get Attachments(): PersonAttachmentModel[] {
    return this._Attachments;
  }
}
