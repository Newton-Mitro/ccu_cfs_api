import { IAuditableModel } from '../../../../../common/models/auditable.model';
import { AccountStatus } from '../enums/account-status.enum';
import { AccountType } from '../enums/account-type.enum';
import { ControlLedger } from '../enums/control-ledger';

export interface ISubsidiaryLedgerAccount extends IAuditableModel {
  accountId: string;
  accountType: AccountType;
  controlLedger: ControlLedger;
  accountNumber: string;
  accountName: string;
  branch: string;
  balance: number;
  accountStatus: AccountStatus;
}
