import { CollateralModel } from '../../../../collaterals/domain/model/collateral.model';
import { ScheduleModel } from '../../../../schedules/domain/model/schedule.model';
import { AccountType } from '../../enum/account-type.enum';
import { Branch } from '../../enum/branch.enum';
import { ControlLedger } from '../../enum/control-ledger';
import { BaseCustomerModel } from '../../model/base-customer.model';
import { IntroducerModel } from '../../model/introducer.model';
import { NomineeModel } from '../../model/nominee.model';
import { OperatorModel } from '../../model/operator.model';
import { SubsidiaryLedgerAccountModel } from '../../model/subsidiary-ledger-account.model';

export interface IOpenableSubsidiaryLedger {
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
  ): SubsidiaryLedgerAccountModel;
}
