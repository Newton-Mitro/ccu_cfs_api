import { Gender } from '../../../../../common/domain/enums/gender.enum';
import { MaritalStatus } from '../../../../../common/domain/enums/marital-status.enum';
import { Profession } from '../../../../../common/domain/enums/profession.enum';
import { Religion } from '../../../../../common/domain/enums/religion.enum';
import { IBaseCustomer } from './base-customer.interface';

export interface IHumanCustomer extends IBaseCustomer {
  dateOfBirth: string;
  nid: string;
  birthRegistrationNumber: string;
  gender: Gender;
  religion: Religion;
  profession: Profession;
  maritalStatus: MaritalStatus;
}
