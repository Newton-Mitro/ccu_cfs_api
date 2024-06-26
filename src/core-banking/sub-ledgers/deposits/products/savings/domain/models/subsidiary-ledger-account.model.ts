import { AuthUserType } from '../../../../../../../common/domain/types/auth-user.type';
import { IBaseCustomer } from '../../../../../shared/domain/models/base-customer.interface';
import { IntroducerModel } from '../../../../../shared/domain/models/introducer.model';
import { NomineeModel } from '../../../../../shared/domain/models/nominee.model';
import { OperatorModel } from '../../../../../shared/domain/models/operator.model';
import { AccountStatus } from '../enums/account-status.enum';
import { AccountType } from '../enums/account-type.enum';
import { Branch } from '../enums/branch.enum';
import { ControlLedger } from '../enums/control-ledger';
import { DefaulterType } from '../enums/defaulter-type.enum';

export class SubsidiaryLedgerAccountModel {
  accountId: string;
  accountType: AccountType;
  controlLedger: ControlLedger;
  accountNumber: string;
  accountName: string;
  branch: Branch;
  duration: number;
  interestRate: number;
  stock: number;
  protectionSchemePercent: number;
  openingAmount: number;
  installmentAmount: number;
  numberOfInstallment: number;
  introducers: IntroducerModel[];
  holders: IBaseCustomer[];
  operators: OperatorModel[];
  nominees: NomineeModel[];
  openingDate: string;
  maturityDate: string;
  closingDate: string;
  defaulterType: DefaulterType;
  accountStatus: AccountStatus;
  runningBalance: number;
  totalTakenSuretyAmount: number;
  totalGivenSuretyAmount: number;
  totalScheduleDefaultMonth: number;
  createdAt: string;
  updatedAt: string;
  createdBy: AuthUserType | null;
  updatedBy: AuthUserType | null;
}
