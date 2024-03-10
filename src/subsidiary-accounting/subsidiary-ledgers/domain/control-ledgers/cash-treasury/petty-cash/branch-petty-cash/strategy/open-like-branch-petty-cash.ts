import { BadRequestException } from '@nestjs/common';
import { CollateralModel } from 'src/subsidiary-accounting/collaterals/domain/model/collateral.model';
import { ScheduleModel } from 'src/subsidiary-accounting/schedules/domain/model/schedule.model';
import { AccountType } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/account-type.enum';
import { Branch } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/branch.enum';
import { ControlLedger } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/control-ledger';
import { IOpenableSubsidiaryLedger } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/interface/strategy/openable-subsidiary-ledger.interface';
import { BaseCustomerModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/base-customer.model';
import { IntroducerModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/introducer.model';
import { NomineeModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/nominee.model';
import { OperatorModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/operator.model';
import { SubsidiaryLedgerAccountModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/subsidiary-ledger-account.model';

export class OpenLikeGeneralLoan implements IOpenableSubsidiaryLedger {
  OpenSubsidiaryLedgerAccount(
    accountType: AccountType,
    controlLedger: ControlLedger,
    accountName: string,
    branch: Branch,
    holders: BaseCustomerModel[],
    operators: OperatorModel[],
    interestRate: number,
    duration: number,
    protectionSchemePercent: number,
    openingAmount: number,
    installmentAmount: number,
    numberOfInstallment: number,
    stock: number,
    nominees: NomineeModel[],
    introducers: IntroducerModel[],
    collaterals: CollateralModel[],
    schedules: ScheduleModel[],
  ): SubsidiaryLedgerAccountModel {
    throw new BadRequestException('Method not implemented.');
  }
}
