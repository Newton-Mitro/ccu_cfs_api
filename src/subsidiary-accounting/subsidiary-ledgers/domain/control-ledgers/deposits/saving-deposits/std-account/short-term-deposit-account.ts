import { CollateralModel } from 'src/subsidiary-accounting/collaterals/domain/model/collateral.model';
import { ScheduleModel } from 'src/subsidiary-accounting/schedules/domain/model/schedule.model';
import { AccountType } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/account-type.enum';
import { Branch } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/branch.enum';
import { ControlLedger } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/control-ledger';
import { ICloseableSubsidiaryLedger } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/interface/strategy/closeable-subsidiary-ledger.interface';
import { IDepositAbleSubsidiaryLedger } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/interface/strategy/deposit-able-subsidiary-ledger.interface';
import { IOpenableSubsidiaryLedger } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/interface/strategy/openable-subsidiary-ledger.interface';
import { ITransferableSubsidiaryLedger } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/interface/strategy/transferable-subsidiary-ledger.interface';
import { IWithdrawableSubsidiaryLedger } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/interface/strategy/withdrawable-subsidiary-ledger.interface';
import { BaseCustomerModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/base-customer.model';
import { IntroducerModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/introducer.model';
import { NomineeModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/nominee.model';
import { OperatorModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/operator.model';
import { SubsidiaryLedgerAccountModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/subsidiary-ledger-account.model';
import { OpenLikeShortTimeDepositAccount } from './strategy/open-like-short-time-deposit-account';

export class ShortTermDepositAccount
  implements
    IOpenableSubsidiaryLedger,
    ICloseableSubsidiaryLedger,
    IDepositAbleSubsidiaryLedger,
    ITransferableSubsidiaryLedger,
    IWithdrawableSubsidiaryLedger
{
  private iOpenableSubsidiaryLedger: IOpenableSubsidiaryLedger;
  private iCloseableSubsidiaryLedger: ICloseableSubsidiaryLedger;
  private iDepositAbleSubsidiaryLedger: IDepositAbleSubsidiaryLedger;
  private iTransferableSubsidiaryLedger: ITransferableSubsidiaryLedger;
  private iWithdrawableSubsidiaryLedger: IWithdrawableSubsidiaryLedger;

  constructor() {
    this.iOpenableSubsidiaryLedger = new OpenLikeShortTimeDepositAccount();
    this.iCloseableSubsidiaryLedger = null;
    this.iDepositAbleSubsidiaryLedger = null;
    this.iTransferableSubsidiaryLedger = null;
    this.iWithdrawableSubsidiaryLedger = null;
  }

  OpenSubsidiaryLedgerAccount(
    accountType: AccountType,
    controlLedger: ControlLedger,
    accountName: string,
    branch: Branch,
    holders: BaseCustomerModel[],
    operators: OperatorModel[],
    interestRate?: number,
    duration?: number,
    protectionSchemePercent?: number,
    openingAmount?: number,
    installmentAmount?: number,
    numberOfInstallment?: number,
    stock?: number,
    nominees?: NomineeModel[],
    introducers?: IntroducerModel[],
    collaterals?: CollateralModel[],
    schedules?: ScheduleModel[],
  ): SubsidiaryLedgerAccountModel {
    const subsidiaryLedgerAccountModel =
      this.iOpenableSubsidiaryLedger.OpenSubsidiaryLedgerAccount(
        accountType,
        controlLedger,
        accountName,
        branch,
        holders,
        operators,
        interestRate,
        duration,
        protectionSchemePercent,
        openingAmount,
        installmentAmount,
        numberOfInstallment,
        stock,
        nominees,
        introducers,
        collaterals,
        schedules,
      );

    return subsidiaryLedgerAccountModel;
  }
}
