import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Relationship } from 'src/common/enums/relationship.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { FamilyTreeStatus } from 'src/kyc/domain/enums/family-tree-status.enum';
import { Address } from '../../common/responses/address';
import { PersonAttachment } from '../../common/responses/person-attachment';

export class Person {
  constructor(
    readonly personId: string,
    readonly identificationNumber: string,
    readonly nameEn: string,
    readonly nameBn: string,
    readonly dateOfBirth: Date,
    readonly gender: Gender,
    readonly bloodGroup: BloodGroup,
    readonly religion: Religion,
    readonly nid: string,
    readonly birthRegistrationNumber: string,
    readonly maritalStatus: MaritalStatus,
    readonly contactNumber: string,
    readonly mobileNumber: string,
    readonly phoneNumber: string,
    readonly email: string,
    readonly profession: Profession,
    readonly photo: string,
  ) {}
}

export class PersonResponse extends Person {
  addresses: Address[];
  familyTree: FamilyAndRelative[];
  educations: Education[];
  trainings: Training[];
  employmentHistories: EmploymentHistory[];
  attachments: PersonAttachment[];

  constructor(
    readonly personId: string,
    readonly identificationNumber: string,
    readonly nameEn: string,
    readonly nameBn: string,
    readonly dateOfBirth: Date,
    readonly gender: Gender,
    readonly bloodGroup: BloodGroup,
    readonly religion: Religion,
    readonly nid: string,
    readonly birthRegistrationNumber: string,
    readonly maritalStatus: MaritalStatus,
    readonly contactNumber: string,
    readonly mobileNumber: string,
    readonly phoneNumber: string,
    readonly email: string,
    readonly profession: Profession,
    readonly photo: string,
  ) {
    super(
      personId,
      identificationNumber,
      nameEn,
      nameBn,
      dateOfBirth,
      gender,
      bloodGroup,
      religion,
      nid,
      birthRegistrationNumber,
      maritalStatus,
      contactNumber,
      mobileNumber,
      phoneNumber,
      email,
      profession,
      photo,
    );
  }
}

export class Education {
  constructor(
    readonly educationId: string,
    readonly educationLevel: string,
    readonly educationDegree: string,
    readonly instituteName: string,
    readonly majorSubject: string,
    readonly passingYear: string,
    readonly grade: string,
  ) {}
}

export class EmploymentHistory {
  constructor(
    readonly employmentHistoryId: string,
    readonly organizationName: string,
    readonly position: string,
    readonly address: string,
    readonly supervisorName: string,
    readonly supervisorDesignation: string,
    readonly supervisorPhone: string,
    readonly jobResponsibilities: string,
    readonly salary: number,
    readonly startDate: Date,
    readonly endDate: Date,
    readonly tillNow: boolean,
  ) {}
}

export class FamilyAndRelative {
  constructor(
    readonly familyTreeId: string,
    readonly identificationNumber: string,
    readonly nameEn: string,
    readonly nameBn: string,
    readonly dateOfBirth: Date,
    readonly gender: Gender,
    readonly bloodGroup: BloodGroup,
    readonly religion: Religion,
    readonly nid: string,
    readonly birthRegistrationNumber: string,
    readonly maritalStatus: MaritalStatus,
    readonly contactNumber: string,
    readonly mobileNumber: string,
    readonly phoneNumber: string,
    readonly email: string,
    readonly photo: string,
    readonly relationship: Relationship,
    readonly status: FamilyTreeStatus,
  ) {}
}

export class Training {
  constructor(
    readonly trainingId: string,
    readonly courseTitle: string,
    readonly instituteName: string,
    readonly courseContent: string,
    readonly result: string,
    readonly startDate: Date,
    readonly endDate: Date,
  ) {}
}
