import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AccountStatus } from '../../domain/enums/account-status.enum';
import { AccountType } from '../../domain/enums/account-type.enum';
import { Branch } from '../../domain/enums/branch.enum';
import { ControlLedger } from '../../domain/enums/control-ledger';
import { DefaulterType } from '../../domain/enums/defaulter-type.enum';
import { BaseCustomer, BaseCustomerSchema } from './base-customer.schema';
import { Introducer, IntroducerSchema } from './introducer.schema';
import { Nominee, NomineeSchema } from './nominee.schema';
import { Operator, OperatorSchema } from './operator.schema';

@Schema()
export class SubsidiaryLedgerAccount {
  @Prop({
    type: String,
    enum: Object.values(AccountType),
    default: AccountType.Personal,
  })
  private AccountType: AccountType;

  @Prop({
    type: String,
    enum: Object.values(ControlLedger),
    default: ControlLedger.ShareAccount,
  })
  private ControlLedger: ControlLedger;

  @Prop({ type: String, trim: true })
  private AccountNumber: string;

  @Prop({ type: String, trim: true })
  private AccountName: string;

  @Prop({
    type: String,
    enum: Object.values(Branch),
    default: Branch.HeadOffice,
  })
  private Branch: Branch;

  @Prop({ type: Number })
  private Duration: number;

  @Prop({ type: Number })
  private InterestRate: number;

  @Prop({ type: Number })
  private Stock: number;

  @Prop({ type: Number })
  private ProtectionSchemePercent: number;

  @Prop({ type: Number })
  private OpeningAmount: number;

  @Prop({ type: Number })
  private InstallmentAmount: number;

  @Prop({ type: Number })
  private NumberOfInstallment: number;

  @Prop({ type: Array(IntroducerSchema) })
  private Introducers: Introducer[];

  @Prop({ type: Array(BaseCustomerSchema) })
  private Holders: BaseCustomer[];

  @Prop({ type: Array(OperatorSchema) })
  private Operators: Operator[];

  @Prop({ type: Array(NomineeSchema) })
  private Nominees: Nominee[];

  @Prop({ type: String, trim: true })
  private OpeningDate: string;

  @Prop({ type: String, trim: true })
  private MaturityDate: string;

  @Prop({ type: String, trim: true })
  private ClosingDate: string;

  @Prop({
    type: String,
    enum: Object.values(DefaulterType),
    default: DefaulterType.Regular,
  })
  private DefaulterType: DefaulterType;

  @Prop({
    type: String,
    enum: Object.values(AccountStatus),
    default: AccountStatus.Inactive,
  })
  private AccountStatus: AccountStatus;

  @Prop({ type: Number })
  private RunningBalance: number;

  @Prop({ type: Number })
  private TotalTakenSuretyAmount: number;

  @Prop({ type: Number })
  private TotalGivenSuretyAmount: number;

  @Prop({ type: Number })
  private TotalScheduleDefaultMonth: number;

  @Prop({ type: String, trim: true })
  private CreatedAt: string;

  @Prop({ type: String, trim: true })
  private UpdatedAt: string;

  @Prop({ type: String, trim: true })
  private CreatedBy: string;

  @Prop({ type: String, trim: true })
  private UpdatedBy: string;
}

export type SubsidiaryLedgerAccountDocument = SubsidiaryLedgerAccount &
  Document;
export const SUBSIDIARY_LEDGER_ACCOUNT_MODEL = SubsidiaryLedgerAccount.name;
export const SubsidiaryLedgerAccountSchema = SchemaFactory.createForClass(
  SubsidiaryLedgerAccount,
);
