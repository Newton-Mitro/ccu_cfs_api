import { AccountType } from '../../enum/account-type.enum';
import { Branch } from '../../enum/branch.enum';
import { ControlLedger } from '../../enum/control-ledger';
import { BaseCustomerModel } from '../../model/base-customer.model';
import { CollateralModel } from '../../model/collateral.model';
import { IntroducerModel } from '../../model/introducer.model';
import { NomineeModel } from '../../model/nominee.model';
import { OperatorModel } from '../../model/operator.model';
import { ScheduleModel } from '../../model/schedule.model';

export interface IPolicyValidator {
  ValidatePolicy(
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
  );
}
