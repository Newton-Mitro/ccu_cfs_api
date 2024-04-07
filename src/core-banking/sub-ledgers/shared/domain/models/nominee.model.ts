import { Relationship } from 'src/common/enums/relationship.enum';
import { CustomerType } from '../../../../../common/enums/customer-type.enum';
import { Gender } from '../../../../../common/enums/gender.enum';
import { MaritalStatus } from '../../../../../common/enums/marital-status.enum';
import { Profession } from '../../../../../common/enums/profession.enum';
import { Religion } from '../../../../../common/enums/religion.enum';
import { HumanCustomerModel } from './human-customer.model';

export class NomineeModel implements HumanCustomerModel {
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
  createdBy: string;
  updatedBy: string;
}
