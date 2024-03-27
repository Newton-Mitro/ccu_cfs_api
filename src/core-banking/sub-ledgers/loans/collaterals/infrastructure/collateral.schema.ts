import { Prop, Schema } from '@nestjs/mongoose';
import { CollateralStatus } from 'src/core-banking/sub-ledgers/deposits/products/savings/domain/enum/collateral-status.enum';
import { CollateralType } from 'src/core-banking/sub-ledgers/deposits/products/savings/domain/enum/collateral-type.enum';

@Schema()
export class CollateralSchema {
  @Prop({
    type: String,
    enum: Object.values(CollateralType),
    default: CollateralType.AccountSurety,
  })
  CollateralType: CollateralType;

  @Prop({ require: true, trim: true })
  CollateralTakenFromAccount: string;

  @Prop({ require: true, trim: true })
  CollateralGivenToAccount: string;

  @Prop({ require: true, trim: true })
  CollateralAmount: number;

  @Prop({
    type: String,
    enum: Object.values(CollateralStatus),
    default: CollateralStatus.Active,
  })
  CollateralStatus: CollateralStatus;
}
