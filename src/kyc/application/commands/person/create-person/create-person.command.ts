import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { AddPersonAttachmentRequest } from 'src/kyc/presentation/contract/person/request/add-person-attachment.request';

export class CreatePersonCommand {
  NameEn: string;
  NameBn: string;
  DateOfBirth: Date;
  Gender: Gender;
  BloodGroup: BloodGroup;
  Religion: Religion;
  NID: string;
  BirthRegistrationNumber: string;
  MaritalStatus: MaritalStatus;
  ContactNumber: string;
  MobileNumber: string;
  PhoneNumber: string;
  Email: string;
  Profession: Profession;
  Photo: AddPersonAttachmentRequest;

  constructor(
    nameEn: string,
    nameBn: string,
    dateOfBirth: Date,
    gender: Gender,
    bloodGroup: BloodGroup,
    religion: Religion,
    nid: string,
    birthRegistrationNumber: string,
    maritalStatus: MaritalStatus,
    contactNumber: string,
    mobileNumber: string,
    phoneNumber: string,
    email: string,
    profession: Profession,
    photo: AddPersonAttachmentRequest,
  ) {}
}
