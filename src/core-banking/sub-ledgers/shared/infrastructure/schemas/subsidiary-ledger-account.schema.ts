import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../../../../../common/schemas/identifiable-entity.schema';
import { AccountStatus } from '../../domain/enums/account-status.enum';
import { AccountType } from '../../domain/enums/account-type.enum';
import { ControlLedger } from '../../domain/enums/control-ledger';

@Schema()
export class SubsidiaryLedgerAccount extends IdentifiableEntitySchema {
  @Prop({
    type: String,
    enum: Object.values(AccountType),
    default: AccountType.Personal,
  })
  accountType: AccountType;

  @Prop({
    type: String,
    enum: Object.values(ControlLedger),
    default: ControlLedger.ShareAccount,
  })
  controlLedger: ControlLedger;

  @Prop({ type: String, trim: true, required: true })
  accountNumber: string;

  @Prop({ type: String, trim: true, required: true })
  accountName: string;

  @Prop({ type: String, trim: true, required: true })
  branch: string;

  @Prop({
    type: String,
    enum: Object.values(AccountStatus),
    default: AccountStatus.Inactive,
  })
  accountStatus: AccountStatus;
}

export type SubsidiaryLedgerAccountDocument = SubsidiaryLedgerAccount &
  Document;
export const SUBSIDIARY_LEDGER_ACCOUNT_MODEL = SubsidiaryLedgerAccount.name;
export const SubsidiaryLedgerAccountSchema = SchemaFactory.createForClass(
  SubsidiaryLedgerAccount,
);
