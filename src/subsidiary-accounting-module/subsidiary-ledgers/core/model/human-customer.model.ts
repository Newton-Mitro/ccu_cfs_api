import { Gender } from 'src/subsidiary-accounting-module/kyc/core/enum/gender.enum';
import { MaritalStatus } from 'src/subsidiary-accounting-module/kyc/core/enum/marital-status.enum';
import { Profession } from 'src/subsidiary-accounting-module/kyc/core/enum/profession.enum';
import { Religion } from 'src/subsidiary-accounting-module/kyc/core/enum/religion.enum';
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
