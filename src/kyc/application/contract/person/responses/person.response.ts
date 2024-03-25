import { Address } from 'nodemailer/lib/mailer';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Relationship } from 'src/common/enums/relationship.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { FamilyTreeStatus } from 'src/kyc/domain/enums/family-tree-status.enum';
import { PersonAttachment } from '../../common/responses/person-attachment';

export class PersonResponse {
  personId: string;
  identificationNumber: string;
  nameEn: string;
  nameBn: string;
  dateOfBirth: Date;
  gender: Gender;
  bloodGroup: BloodGroup;
  religion: Religion;
  nid: string;
  birthRegistrationNumber: string;
  maritalStatus: MaritalStatus;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  email: string;
  profession: Profession;
  photo: PhotoAttachment;
  addresses: Address[];
  familyTree: FamilyAndRelative[];
  educations: Education[];
  trainings: Training[];
  employmentHistories: EmploymentHistory[];
  attachments: PersonAttachment[];
}

class Education {
  educationId: string;
  educationLevel: string;
  educationDegree: string;
  instituteName: string;
  majorSubject: string;
  passingYear: string;
  grade: string;
}

class EmploymentHistory {
  employmentHistoryId: string;
  organizationName: string;
  position: string;
  address: string;
  supervisorName: string;
  supervisorDesignation: string;
  supervisorPhone: string;
  jobResponsibilities: string;
  salary: number;
  startDate: Date;
  endDate: Date;
  tillNow: boolean;
}

class FamilyAndRelative {
  familyTreeId: string;
  identificationNumber: string;
  nameEn: string;
  nameBn: string;
  dateOfBirth: Date;
  gender: Gender;
  bloodGroup: BloodGroup;
  religion: Religion;
  nid: string;
  birthRegistrationNumber: string;
  maritalStatus: MaritalStatus;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  email: string;
  photo: string;
  relationship: Relationship;
  status: FamilyTreeStatus;
}

class PhotoAttachment {
  id: string;
  documentTitle: string;
  fileUrl: string;
}

class Training {
  trainingId: string;
  courseTitle: string;
  instituteName: string;
  courseContent: string;
  result: string;
  startDate: Date;
  endDate: Date;
}
