import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { InstallmentType } from '../../domain/enum/installment-type.enum';
import { ScheduleStatus } from '../../domain/enum/schedule-status.enum';
import { ScheduleType } from '../../domain/enum/schedule-type.enum';

export class ScheduleRequest {
  @IsOptional()
  @IsString()
  // @Expose({ name: 'id' })
  Id: string;

  @IsNumber()
  // @Expose({ name: 'installment_no' })
  InstallmentNo: number;

  @IsOptional()
  @IsDateString()
  // @Expose({ name: 'installment_date' })
  InstallmentDate: string;

  @IsString()
  // @Expose({ name: 'installment_year' })
  InstallmentYear: string;

  @IsString()
  // @Expose({ name: 'installment_month' })
  InstallmentMonth: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(ScheduleType)
  // @Expose({ name: 'schedule_type' })
  ScheduleType: ScheduleType;

  @IsNotEmpty()
  @IsString()
  @IsEnum(InstallmentType)
  // @Expose({ name: 'installment_type' })
  InstallmentType: InstallmentType;

  @IsNumber()
  // @Expose({ name: 'installment_amount' })
  InstallmentAmount: number;

  @IsOptional()
  @IsNumber()
  // @Expose({ name: 'paid_installment_amount' })
  PaidInstallmentAmount: number;

  @IsOptional()
  @IsNumber()
  // @Expose({ name: 'advanced_paid_installment_amount' })
  AdvancedPaidInstallmentAmount: number;

  @IsOptional()
  @IsNumber()
  // @Expose({ name: 'due_installment_amount' })
  DueInstallmentAmount: number;

  @IsOptional()
  @IsNumber()
  // @Expose({ name: 'due_fine_amount' })
  DueFineAmount: number;

  @IsOptional()
  @IsString()
  // @Expose({ name: 'schedule_processing_date' })
  ScheduleProcessingDate: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(ScheduleStatus)
  // @Expose({ name: 'schedule_status' })
  ScheduleStatus: ScheduleStatus;
}
