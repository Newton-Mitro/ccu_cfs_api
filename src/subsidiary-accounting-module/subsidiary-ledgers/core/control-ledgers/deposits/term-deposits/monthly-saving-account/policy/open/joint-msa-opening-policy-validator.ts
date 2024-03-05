import { BadRequestException } from '@nestjs/common';
import { CustomerType } from 'src/kyc/core/enum/customer-type.enum';
import { Religion } from 'src/kyc/core/enum/religion.enum';
import { AccountType } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/account-type.enum';
import { Branch } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/branch.enum';
import { ControlLedger } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/control-ledger';
import { CustomerSubstitute } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/customer-substitute.enum';
import { IPolicyValidator } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/interface/policy-validators/policy-validator.interface';
import { BaseCustomerModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/base-customer.model';
import { CollateralModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/collateral.model';
import { HumanCustomerModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/human-customer.model';
import { IntroducerModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/introducer.model';
import { NomineeModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/nominee.model';
import { OperatorModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/operator.model';
import { ScheduleModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/schedule.model';
import { CustomerPolicy } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/policy/human-customer-policy';

export class JointMSAOpeningPolicyValidator implements IPolicyValidator {
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
        CustomerType.Person,
        CustomerSubstitute.AccountIntroducer,
      );

      if (introducer instanceof HumanCustomerModel) {
        // [ ] 09. PAP - Check if account introducer religion is christian?
        CustomerPolicy.ReligionCheck(
          introducer,
          Religion.Christian,
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

    // [ ] 01. JAP - Check if at least two account holder are given
    if (holders.length < 2) {
      throw new BadRequestException('At least two account holder needed.');
    }

    holders.forEach((holder) => {
      // [ ] 02. JAP - Check if account holder is a person
      CustomerPolicy.CustomerTypeCheck(
        holder,
        CustomerType.Person,
        CustomerSubstitute.AccountHolder,
      );

      if (holder instanceof HumanCustomerModel) {
        // [ ] 03. JAP - Check if account holder is christian
        CustomerPolicy.ReligionCheck(
          holder,
          Religion.Christian,
          CustomerSubstitute.AccountHolder,
        );

        // [ ] 08. PAP - Check if account operator date of birth, NID or BNR are given and age is greater then or equal to eighteen?
        CustomerPolicy.AgeCheck(holder, 18, CustomerSubstitute.AccountHolder);

        // [ ] 04. JAP - Check if account holder have saving account
        CustomerPolicy.HasSavingAccountCheck(
          holder,
          this.anyService,
          CustomerSubstitute.AccountHolder,
        );
      }
    });

    // [ ] 08. JAP - Check if at least an operator given.
    if (operators.length < 1) {
      throw new BadRequestException('At least one operator needed.');
    }

    operators.forEach((operator) => {
      if (
        !holders.some(
          (holder) =>
            operator.IdentificationNumber === holder.IdentificationNumber,
        )
      ) {
        throw new BadRequestException(
          'Only account holder can be account operator.',
        );
      }

      // [ ] 09. JAP - Check if account operator is a person.
      CustomerPolicy.CustomerTypeCheck(
        operator,
        CustomerType.Person,
        CustomerSubstitute.AccountOperator,
      );

      if (operator instanceof HumanCustomerModel) {
        // [ ] 10. JAP - Check if account operator is christian.
        CustomerPolicy.ReligionCheck(
          operator,
          Religion.Christian,
          CustomerSubstitute.AccountOperator,
        );

        // [ ] 08. PAP -Check if account operator date of birth, NID or BNR are given and age is greater then or equal to eighteen?
        CustomerPolicy.AgeCheck(
          operator,
          18,
          CustomerSubstitute.AccountOperator,
        );
      }
    });

    // [ ] 14. JAP - Check if one or more nominees are given.
    if (nominees.length < 1) {
      throw new BadRequestException('At least one nominee needed.');
    }

    // [ ] 12. CAP - Check if nominees total percent equal to 100%
    CustomerPolicy.NomineesPercentCheck(
      nominees,
      CustomerSubstitute.AccountNominee,
    );
  }
}
