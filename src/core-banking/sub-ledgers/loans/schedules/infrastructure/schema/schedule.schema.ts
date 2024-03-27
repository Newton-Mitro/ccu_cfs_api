import { Prop, Schema } from '@nestjs/mongoose';
import { InstallmentType } from 'src/core-banking/sub-ledgers/deposits/products/savings/domain/enum/installment-type.enum';
import { ScheduleStatus } from 'src/core-banking/sub-ledgers/deposits/products/savings/domain/enum/schedule-status.enum';
import { ScheduleType } from 'src/core-banking/sub-ledgers/deposits/products/savings/domain/enum/schedule-type.enum';

@Schema()
export class ScheduleSchema {
  @Prop({ require: true, type: Number })
  InstallmentNo: number;

  @Prop({ require: true, trim: true })
  InstallmentDate: string;

  @Prop({ require: true, trim: true })
  InstallmentYear: string;

  @Prop({ require: true, trim: true })
  InstallmentMonth: string;

  @Prop({
    type: String,
    enum: Object.values(ScheduleType),
    default: ScheduleType.RegularSchedule,
  })
  ScheduleType: ScheduleType;

  @Prop({
    type: String,
    enum: Object.values(InstallmentType),
    default: InstallmentType.RegularInstallment,
  })
  InstallmentType: InstallmentType;

  @Prop({ type: Number })
  InstallmentAmount: number;

  @Prop({ type: Number })
  PaidInstallmentAmount: number;

  @Prop({ type: Number })
  AdvancedPaidInstallmentAmount: number;

  @Prop({ type: Number })
  DueInstallmentAmount: number;

  @Prop({ type: Number })
  DueFineAmount: number;

  @Prop({ type: String })
  ScheduleProcessingDate: string;

  @Prop({
    type: String,
    enum: Object.values(ScheduleStatus),
    default: ScheduleStatus.Active,
  })
  ScheduleStatus: ScheduleStatus;
}
