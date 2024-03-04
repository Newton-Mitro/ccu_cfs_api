import { Relationship } from 'src/subsidiary-accounting-module/kyc/core/enum/relationship.enum';
import { HumanCustomerModel } from './human-customer.model';

export class NomineeModel extends HumanCustomerModel {
  Relationship: Relationship;
  Percent: number;
}
