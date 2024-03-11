import { Relationship } from 'src/common/enums/relationship.enum';
import { FamilyTreeStatus } from 'src/kyc/domain/common/enums/family-tree-status.enum';
import { PersonalDocumentType } from 'src/kyc/domain/common/enums/kyc-attachment-type.enum';
import { AddressType } from 'src/kyc/domain/common/enums/person-address-type.enum';

export class CreatePersonCommand {
  constructor(
    NameEn: string,
    NameBn: string,
    DateOfBirth: Date,
    Gender: string,
    BloodGroup: string,
    Religion: string,
    NID: string,
    BirthRegistrationNumber: string,
    MaritalStatus: string,
    ContactNumber: string,
    MobileNumber: string,
    PhoneNumber: string,
    Email: string,
    Profession: string,
    Addresses: AddressDTO[],
    FamilyTree: FamilyTreeDTO[],
    Educations: EducationDTO[],
    Trainings: TrainingDTO[],
    EmploymentHistories: EmploymentHistoryDTO[],
    Attachments: KYCAttachmentDTO[],
  ) {}
}

class EducationDTO {
  EducationLevel: string;
  EducationDegree: string;
  InstituteName: string;
  MajorSubject: string;
  PassingYear: string;
  Grade: string;
}

class EmploymentHistoryDTO {
  OrganizationName: string;
  Position: string;
  Address: string;
  SupervisorName: string;
  SupervisorDesignation: string;
  SupervisorPhone: string;
  JobResponsibilities: string;
  Salary: number;
  StartDate: Date;
  EndDate: Date;
  TillNow: boolean;
}

class FamilyTreeDTO {
  IdentificationNumber: string;
  NameEn: string;
  NameBn: string;
  DateOfBirth: Date;
  Gender: string;
  BloodGroup: string;
  Religion: string;
  NID: string;
  BirthRegistrationNumber: string;
  MaritalStatus: string;
  ContactNumber: string;
  MobileNumber: string;
  PhoneNumber: string;
  Email: string;
  Relationship: Relationship;
  Status: FamilyTreeStatus;
}

class TrainingDTO {
  CourseTitle: string;
  InstituteName: string;
  CourseContent: string;
  Result: string;
  StartDate: Date;
  EndDate: Date;
}

class KYCAttachmentDTO {
  FileExtension: string;
  DocumentTitle: PersonalDocumentType;
  Base64StringDocument: string;
}

class AddressDTO {
  AddressId: string;
  AddressType: AddressType;
  AddressLineOne: string;
  AddressLineTwo: string;
  Country: string;
  State: string;
  City: string;
  Division: string;
  District: string;
  SubDistrict: string;
  ZipCode: string;
}
