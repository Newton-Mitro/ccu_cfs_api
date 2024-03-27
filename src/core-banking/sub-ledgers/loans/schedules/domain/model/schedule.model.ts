import { InstallmentType } from 'src/core-banking/sub-ledgers/deposits/products/savings/domain/enum/installment-type.enum';
import { ScheduleStatus } from 'src/core-banking/sub-ledgers/deposits/products/savings/domain/enum/schedule-status.enum';
import { ScheduleType } from 'src/core-banking/sub-ledgers/deposits/products/savings/domain/enum/schedule-type.enum';
import { v4 as uuidv4 } from 'uuid';

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
