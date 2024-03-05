import { Gender } from 'src/kyc/domain/enum/gender.enum';
import { MaritalStatus } from 'src/kyc/domain/enum/marital-status.enum';
import { Profession } from 'src/kyc/domain/enum/profession.enum';
import { Religion } from 'src/kyc/domain/enum/religion.enum';
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
