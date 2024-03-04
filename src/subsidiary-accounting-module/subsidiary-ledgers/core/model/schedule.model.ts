import { v4 as uuidv4 } from 'uuid';
import { InstallmentType } from '../enum/installment-type.enum';
import { ScheduleStatus } from '../enum/schedule-status.enum';
import { ScheduleType } from '../enum/schedule-type.enum';

export class ScheduleModel {
  Id: string = uuidv4();
  InstallmentNo: number;
  InstallmentDate: string;
  InstallmentYear: string;
  InstallmentMonth: string;
  ScheduleType: ScheduleType;
  InstallmentType: InstallmentType;
  InstallmentAmount: number;
  PaidInstallmentAmount: number;
  AdvancedPaidInstallmentAmount: number;
  DueInstallmentAmount: number;
  DueFineAmount: number;
  ScheduleProcessingDate: string;
  ScheduleStatus: ScheduleStatus;
}
