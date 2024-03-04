import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { InstallmentType } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/installment-type.enum';
import { ScheduleStatus } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/schedule-status.enum';
import { ScheduleType } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/schedule-type.enum';

export class ScheduleDTO {
  @IsOptional()
  @IsString()
  Id: string;

  @IsNumber()
  InstallmentNo: number;

  @IsOptional()
  @IsDateString()
  InstallmentDate: string;

  @IsString()
  InstallmentYear: string;

  @IsString()
  InstallmentMonth: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(ScheduleType)
  ScheduleType: ScheduleType;

  @IsNotEmpty()
  @IsString()
  @IsEnum(InstallmentType)
  InstallmentType: InstallmentType;

  @IsNumber()
  InstallmentAmount: number;

  @IsOptional()
  @IsNumber()
  PaidInstallmentAmount: number;

  @IsOptional()
  @IsNumber()
  AdvancedPaidInstallmentAmount: number;

  @IsOptional()
  @IsNumber()
  DueInstallmentAmount: number;

  @IsOptional()
  @IsNumber()
  DueFineAmount: number;

  @IsOptional()
  @IsString()
  ScheduleProcessingDate: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(ScheduleStatus)
  ScheduleStatus: ScheduleStatus;
}
