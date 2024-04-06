import { v4 as uuidv4 } from 'uuid';
import { InstallmentType } from '../../../../shared/domain/enums/installment-type.enum';
import { ScheduleStatus } from '../../../../shared/domain/enums/schedule-status.enum';
import { ScheduleType } from '../../../../shared/domain/enums/schedule-type.enum';

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
