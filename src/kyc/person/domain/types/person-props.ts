import { BloodGroup } from '../../../../common/domain/enums/blood-group.enum';
import { Gender } from '../../../../common/domain/enums/gender.enum';
import { MaritalStatus } from '../../../../common/domain/enums/marital-status.enum';
import { Profession } from '../../../../common/domain/enums/profession.enum';
import { Religion } from '../../../../common/domain/enums/religion.enum';
import { AuthUserType } from '../../../../common/domain/types/auth-user.type';

export type PersonProps = {
  personId: string;
  identificationNumber: string;
  nameEn: string;
  nameBn: string;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: AuthUserType | null;
  updatedBy: AuthUserType | null;
  customerType: string;
  dateOfBirth: Date;
  gender: Gender;
  bloodGroup: BloodGroup;
  religion: Religion;
  maritalStatus: MaritalStatus;
  profession: Profession;
  nid: string;
  birthRegistrationNumber: string;
  photo: string;
};
