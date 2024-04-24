import { CustomerType } from '../../../../../common/domain/enums/customer-type.enum';
import { Gender } from '../../../../../common/domain/enums/gender.enum';
import { MaritalStatus } from '../../../../../common/domain/enums/marital-status.enum';
import { Profession } from '../../../../../common/domain/enums/profession.enum';
import { Relationship } from '../../../../../common/domain/enums/relationship.enum';
import { Religion } from '../../../../../common/domain/enums/religion.enum';
import { AuthUserType } from '../../../../../common/domain/types/auth-user.type';
import { IHumanCustomer } from './human-customer.interface';

export class NomineeModel implements IHumanCustomer {
  nomineeId: string;
  identificationNumber: string;
  nameEn: string;
  nameBn: string;
  email: string;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  customerType: CustomerType;
  dateOfBirth: string;
  nid: string;
  birthRegistrationNumber: string;
  gender: Gender;
  religion: Religion;
  profession: Profession;
  maritalStatus: MaritalStatus;
  relationship: Relationship;
  percent: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: AuthUserType | null;
  updatedBy: AuthUserType | null;
}
