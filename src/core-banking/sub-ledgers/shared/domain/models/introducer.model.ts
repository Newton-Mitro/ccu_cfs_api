import { CustomerType } from '../../../../../common/enums/customer-type.enum';
import { Gender } from '../../../../../common/enums/gender.enum';
import { MaritalStatus } from '../../../../../common/enums/marital-status.enum';
import { Profession } from '../../../../../common/enums/profession.enum';
import { Religion } from '../../../../../common/enums/religion.enum';
import { IHumanCustomer } from './human-customer.interface';

export class IntroducerModel implements IHumanCustomer {
  introducerId: string;
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
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}
