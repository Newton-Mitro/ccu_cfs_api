import { v4 as uuidv4 } from 'uuid';
import { CollateralStatus } from '../../../subsidiary-ledgers/domain/enum/collateral-status.enum';
import { CollateralType } from '../../../subsidiary-ledgers/domain/enum/collateral-type.enum';

export class CollateralModel {
  Id: string = uuidv4();
  CollateralType: CollateralType;
  CollateralTakenFromAccount: string;
  CollateralGivenToAccount: string;
  CollateralAmount: number;
  CollateralStatus: CollateralStatus;
}
