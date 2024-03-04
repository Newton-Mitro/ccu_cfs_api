import { BadRequestException } from '@nestjs/common';
import { AccountType } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/account-type.enum';
import { Branch } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/branch.enum';
import { ControlLedger } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/control-ledger';
import { IOpenableSubsidiaryLedger } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/interface/strategy/openable-subsidiary-ledger.interface';
import { BaseCustomerModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/base-customer.model';
import { CollateralModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/collateral.model';
import { IntroducerModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/introducer.model';
import { NomineeModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/nominee.model';
import { OperatorModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/operator.model';
import { ScheduleModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/schedule.model';
import { SubsidiaryLedgerAccountModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/subsidiary-ledger-account.model';

export class OpenLikeTellerCash implements IOpenableSubsidiaryLedger {
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
    throw new BadRequestException('Method not implemented.');
  }
}
