import { AccountType } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/account-type.enum';
import { Branch } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/branch.enum';
import { ControlLedger } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/control-ledger';
import { ICloseableSubsidiaryLedger } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/interface/strategy/closeable-subsidiary-ledger.interface';
import { IDepositAbleSubsidiaryLedger } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/interface/strategy/deposit-able-subsidiary-ledger.interface';
import { IOpenableSubsidiaryLedger } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/interface/strategy/openable-subsidiary-ledger.interface';
import { BaseCustomerModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/base-customer.model';
import { CollateralModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/collateral.model';
import { IntroducerModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/introducer.model';
import { NomineeModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/nominee.model';
import { OperatorModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/operator.model';
import { ScheduleModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/schedule.model';
import { SubsidiaryLedgerAccountModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/subsidiary-ledger-account.model';
import { OpenLikeShareAccount } from './strategy/open-like-share-account';

export class ShareAccount
  implements
    IOpenableSubsidiaryLedger,
    ICloseableSubsidiaryLedger,
    IDepositAbleSubsidiaryLedger
{
  private iOpenableSubsidiaryLedger: IOpenableSubsidiaryLedger;
  private iCloseableSubsidiaryLedger: ICloseableSubsidiaryLedger;
  private iDepositAbleSubsidiaryLedger: IDepositAbleSubsidiaryLedger;

  constructor() {
    this.iOpenableSubsidiaryLedger = new OpenLikeShareAccount();
    this.iCloseableSubsidiaryLedger = null;
    this.iDepositAbleSubsidiaryLedger = null;
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
    // Check If Account Holder Has Saving Account
    // Check If Saving Account Age >= Then 6 Month
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
