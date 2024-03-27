import { CollateralStatus } from 'src/core-banking/sub-ledgers/deposits/products/savings/domain/enum/collateral-status.enum';
import { CollateralType } from 'src/core-banking/sub-ledgers/deposits/products/savings/domain/enum/collateral-type.enum';
import { v4 as uuidv4 } from 'uuid';

export class CollateralModel {
  Id: string = uuidv4();
  CollateralType: CollateralType;
  CollateralTakenFromAccount: string;
  CollateralGivenToAccount: string;
  CollateralAmount: number;
  CollateralStatus: CollateralStatus;
}
