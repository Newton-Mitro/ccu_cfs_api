import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { AddressResponse } from '../../common/response/address.response';
import { EducationResponse } from './education.response';
import { EmploymentHistoryResponse } from './employment-history.response';
import { FamilyAndRelativeResponse } from './family-and-relative.response';
import { PersonAttachmentResponse } from './person-attachment.response';
import { PhotoAttachmentResponse } from './photo-attachment.response';
import { TrainingResponse } from './training.response';

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
  photo: PhotoAttachmentResponse;
  addresses: AddressResponse[];
  familyTree: FamilyAndRelativeResponse[];
  educations: EducationResponse[];
  trainings: TrainingResponse[];
  employmentHistories: EmploymentHistoryResponse[];
  attachments: PersonAttachmentResponse[];
}
