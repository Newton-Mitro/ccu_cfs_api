import { Gender } from 'src/kyc/core/enum/gender.enum';
import { MaritalStatus } from 'src/kyc/core/enum/marital-status.enum';
import { Profession } from 'src/kyc/core/enum/profession.enum';
import { Religion } from 'src/kyc/core/enum/religion.enum';
import { BaseCustomerModel } from './base-customer.model';

export class HumanCustomerModel extends BaseCustomerModel {
  DateOfBirth: string;
  NID: string;
  BirthRegistrationNumber: string;
  Gender: Gender;
  Religion: Religion;
  Profession: Profession;
  MaritalStatus: MaritalStatus;
}
