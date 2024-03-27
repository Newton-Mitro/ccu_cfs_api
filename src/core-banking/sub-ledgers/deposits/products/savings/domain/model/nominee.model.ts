import { Relationship } from 'src/common/enums/relationship.enum';
import { HumanCustomerModel } from './human-customer.model';

export class NomineeModel extends HumanCustomerModel {
  private _Relationship: Relationship;
  public get Relationship(): Relationship {
    return this._Relationship;
  }
  public set Relationship(value: Relationship) {
    this._Relationship = value;
  }
  private _Percent: number;
  public get Percent(): number {
    return this._Percent;
  }
  public set Percent(value: number) {
    this._Percent = value;
  }
}
