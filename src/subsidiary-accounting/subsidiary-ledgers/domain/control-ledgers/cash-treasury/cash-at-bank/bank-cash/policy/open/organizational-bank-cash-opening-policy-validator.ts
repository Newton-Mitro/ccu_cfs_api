import { BadRequestException } from '@nestjs/common';
import { CustomerType } from 'src/common/enums/customer-type.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { CollateralModel } from 'src/subsidiary-accounting/collaterals/domain/model/collateral.model';
import { ScheduleModel } from 'src/subsidiary-accounting/schedules/domain/model/schedule.model';
import { AccountType } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/account-type.enum';
import { Branch } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/branch.enum';
import { ControlLedger } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/control-ledger';
import { CustomerSubstitute } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/customer-substitute.enum';
import { IPolicyValidator } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/interface/policy-validators/policy-validator.interface';
import { BaseCustomerModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/base-customer.model';
import { HumanCustomerModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/human-customer.model';
import { IntroducerModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/introducer.model';
import { NomineeModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/nominee.model';
import { OperatorModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/operator.model';
import { CustomerPolicy } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/policy/human-customer-policy';

export class OrganizationalBankCashOpeningPolicyValidator
  implements IPolicyValidator
{
  private anyService?: any;

  constructor(anyService?: any) {
    this.anyService = anyService;
  }

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
    // [ ] 07. CAP - Check if at least two introducer are provided
    if (introducers.length > 2) {
      throw new BadRequestException('At least two introducer needed.');
    }

    introducers.forEach((introducer) => {
      // [ ] 08. PAP - Check if account introducer is a person?
      CustomerPolicy.CustomerTypeCheck(
        introducer,
        CustomerType.PERSON,
        CustomerSubstitute.AccountIntroducer,
      );

      if (introducer instanceof HumanCustomerModel) {
        // [ ] 09. PAP - Check if account introducer religion is christian?
        CustomerPolicy.ReligionCheck(
          introducer,
          Religion.CHRISTIAN,
          CustomerSubstitute.AccountIntroducer,
        );

        // [ ] 10. PAP - Check if account introducer NID or BRN are given
        CustomerPolicy.NIDandBRNCheck(
          introducer,
          CustomerSubstitute.AccountIntroducer,
        );

        // [ ] 11. CAP - Check if introducer has saving account
        CustomerPolicy.HasSavingAccountCheck(
          introducer,
          this.anyService,
          CustomerSubstitute.AccountIntroducer,
        );
      }
    });

    // [ ] 01. OAP - Check if an account holder is given.
    if (holders.length !== 1) {
      throw new BadRequestException('An account holder needed.');
    }

    holders.forEach((holder) => {
      // [ ] 02. OAP - Check if account holder is an organization?
      CustomerPolicy.CustomerTypeCheck(
        holder,
        CustomerType.ORGANIZATION,
        CustomerSubstitute.AccountHolder,
      );
    });

    // [ ] 03. OAP - Check if at least three account operator are given.
    if (operators.length < 3) {
      throw new BadRequestException('At least three operator needed.');
    }

    operators.forEach((operator) => {
      // [ ] 04. OAP - Check if account operator is an person?
      CustomerPolicy.CustomerTypeCheck(
        operator,
        CustomerType.PERSON,
        CustomerSubstitute.AccountOperator,
      );

      if (operator instanceof HumanCustomerModel) {
        // [ ] 05. OAP - Check if account operator is christian.
        CustomerPolicy.ReligionCheck(
          operator,
          Religion.CHRISTIAN,
          CustomerSubstitute.AccountOperator,
        );

        // [ ] 06. PAP - Check if account operator date of birth, NID or BNR are given and age is greater then or equal to eighteen?
        CustomerPolicy.AgeCheck(
          operator,
          18,
          CustomerSubstitute.AccountOperator,
        );
      }
    });
  }
}
