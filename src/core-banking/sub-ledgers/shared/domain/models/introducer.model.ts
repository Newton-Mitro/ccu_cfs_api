import { CustomerType } from '../../../../../common/domain/enums/customer-type.enum';
import { Gender } from '../../../../../common/domain/enums/gender.enum';
import { MaritalStatus } from '../../../../../common/domain/enums/marital-status.enum';
import { Profession } from '../../../../../common/domain/enums/profession.enum';
import { Religion } from '../../../../../common/domain/enums/religion.enum';
import { AuthUserType } from '../../../../../common/domain/types/auth-user.type';
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
  createdBy: AuthUserType | null;
  updatedBy: AuthUserType | null;
}
