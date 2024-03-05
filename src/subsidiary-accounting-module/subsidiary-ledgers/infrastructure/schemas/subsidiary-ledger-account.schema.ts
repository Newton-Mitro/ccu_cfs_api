import { Prop, Schema } from '@nestjs/mongoose';
import { AccountStatus } from '../../core/enum/account-status.enum';
import { AccountType } from '../../core/enum/account-type.enum';
import { Branch } from '../../core/enum/branch.enum';
import { ControlLedger } from '../../core/enum/control-ledger';
import { DefaulterType } from '../../core/enum/defaulter-type.enum';
import { BaseCustomerSchema } from './base-customer.schema';
import { CollateralSchema } from './collateral.schema';
import { IntroducerSchema } from './introducer.schema';
import { NomineeSchema } from './nominee.schema';
import { OperatorSchema } from './operator.schema';
import { ScheduleSchema } from './schedule.schema';

@Schema()
export class SubsidiaryLedgerAccountSchema {
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
  private Introducers: IntroducerSchema[];

  @Prop({ type: Array(BaseCustomerSchema) })
  private Holders: BaseCustomerSchema[];

  @Prop({ type: Array(OperatorSchema) })
  private Operators: OperatorSchema[];

  @Prop({ type: Array(NomineeSchema) })
  private Nominees: NomineeSchema[];

  @Prop({ type: Array(CollateralSchema) })
  private Collaterals: CollateralSchema[];

  @Prop({ type: Array(ScheduleSchema) })
  private Schedules: ScheduleSchema[];

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
  private TotalAccountSurety: number;

  @Prop({ type: Number })
  private TotalScheduleDefaultMonth: number;

  @Prop({ type: Number })
  private ContinuousScheduleDefaultMonth: number;

  @Prop({ type: String, trim: true })
  private CreatedAt: string;

  @Prop({ type: String, trim: true })
  private UpdatedAt: string;

  @Prop({ type: String, trim: true })
  private CreatedBy: string;

  @Prop({ type: String, trim: true })
  private UpdatedBy: string;
}
