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
import { TrainingResponse } from './training.response';
import { PhotoAttachmentResponse } from './photo-attachment.response';

export class PersonResponse {
  // @Expose({ name: 'person_id' })
  PersonId: string;

  // @Expose({ name: 'identification_number' })
  IdentificationNumber: string;

  // @Expose({ name: 'name_en' })
  NameEn: string;

  // @Expose({ name: 'name_bn' })
  NameBn: string;

  // @Expose({ name: 'date_of_birth' })
  DateOfBirth: Date;

  // @Expose({ name: 'gender' })
  Gender: Gender;

  // @Expose({ name: 'blood_group' })
  BloodGroup: BloodGroup;

  // @Expose({ name: 'religion' })
  Religion: Religion;

  // @Expose({ name: 'nid' })
  NID: string;

  // @Expose({ name: 'birth_registration_number' })
  BirthRegistrationNumber: string;

  // @Expose({ name: 'marital_status' })
  MaritalStatus: MaritalStatus;

  // @Expose({ name: 'contact_number' })
  ContactNumber: string;

  // @Expose({ name: 'mobile_number' })
  MobileNumber: string;

  // @Expose({ name: 'phone_number' })
  PhoneNumber: string;

  // @Expose({ name: 'email' })
  Email: string;

  // @Expose({ name: 'profession' })
  Profession: Profession;

  // @Expose({ name: 'photo' })
  Photo: PhotoAttachmentResponse;

  // @Expose({ name: 'addresses' })
  Addresses: AddressResponse[];

  // @Expose({ name: 'family_tree' })
  FamilyTree: FamilyAndRelativeResponse[];

  // @Expose({ name: 'educations' })
  Educations: EducationResponse[];

  // @Expose({ name: 'trainings' })
  Trainings: TrainingResponse[];

  // @Expose({ name: 'employment_histories' })
  EmploymentHistories: EmploymentHistoryResponse[];

  // @Expose({ name: 'attachments' })
  Attachments: PersonAttachmentResponse[];
}
