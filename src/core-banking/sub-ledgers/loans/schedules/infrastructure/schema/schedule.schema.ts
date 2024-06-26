import { Prop, Schema } from '@nestjs/mongoose';
import { InstallmentType } from '../../../../shared/domain/enums/installment-type.enum';
import { ScheduleStatus } from '../../../../shared/domain/enums/schedule-status.enum';
import { ScheduleType } from '../../../../shared/domain/enums/schedule-type.enum';

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
