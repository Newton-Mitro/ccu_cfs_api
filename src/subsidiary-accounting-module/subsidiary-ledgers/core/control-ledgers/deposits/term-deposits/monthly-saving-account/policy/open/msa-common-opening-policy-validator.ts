import { BadRequestException } from '@nestjs/common';
import { AccountType } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/account-type.enum';
import { Branch } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/branch.enum';
import { ControlLedger } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/control-ledger';
import { IPolicyValidator } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/interface/policy-validators/policy-validator.interface';
import { BaseCustomerModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/base-customer.model';
import { CollateralModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/collateral.model';
import { IntroducerModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/introducer.model';
import { NomineeModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/nominee.model';
import { OperatorModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/operator.model';
import { ScheduleModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/schedule.model';

export class MSACommonOpeningPolicyValidator implements IPolicyValidator {
  public ValidatePolicy(
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
  ) {
    // [ ] 01. Duration is not applicable.
    if (duration !== 0) {
      throw new BadRequestException('Duration is not applicable.');
    }

    // [ ] 02. Protection scheme is not applicable.
    if (protectionSchemePercent !== 0) {
      throw new BadRequestException('Protection scheme is not applicable.');
    }

    // [ ] 03. Installment amount is not applicable.
    // if (installmentAmount !== 0) {
    //   throw new BadRequestException('Installment amount is not applicable.');
    // }

    // [ ] 04. Number of installment is not applicable.
    // if (numberOfInstallment !== 0) {
    //   throw new BadRequestException('Number of installment is not applicable.');
    // }

    // [ ] 05. Collateral are not required for share account opening.
    if (collaterals.length !== 0) {
      throw new BadRequestException('Collaterals is not applicable.');
    }

    // [ ] 06. Schedules are not required for share account opening.
    // if (schedules.length !== 0) {
    //   throw new BadRequestException('Schedules is not applicable.');
    // }

    // [ ] 07. Account name is mandatory.
    if (accountName.trim() === '') {
      throw new BadRequestException('Account name is mandatory.');
    }

    // [ ] 08. Branch name is mandatory.
    if (branch.trim() === '') {
      throw new BadRequestException('Branch name is mandatory.');
    }

    // [ ] 09. Interest rate is not applicable.
    // if (interestRate !== 0) {
    //   throw new BadRequestException('Interest rate is not applicable.');
    // }

    // [ ] 10. Stock is not applicable.
    if (stock !== 0) {
      throw new BadRequestException('Stock is not applicable.');
    }

    // [ ] 11. Account type is mandatory.
    if (accountType.trim() === '') {
      throw new BadRequestException('Account type is mandatory.');
    }

    // [ ] 12. Control ledger is mandatory.
    if (controlLedger.trim() === '') {
      throw new BadRequestException('Control ledger is mandatory.');
    }

    // [ ] 13. Opening amount is not applicable.
    if (openingAmount !== 0) {
      throw new BadRequestException('Opening amount is not applicable.');
    }
  }
}
