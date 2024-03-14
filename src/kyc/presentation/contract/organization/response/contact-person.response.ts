import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Religion } from 'src/common/enums/religion.enum';

export class ContactPersonResponse {
  // @Expose({ name: 'contact_person_id' })
  ContactPersonId: string;

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

  // @Expose({ name: 'photo' })
  Photo: string;
}
