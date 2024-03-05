import { BadRequestException } from '@nestjs/common';
import { CustomerType } from 'src/kyc/domain/enum/customer-type.enum';
import { Religion } from 'src/kyc/domain/enum/religion.enum';
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

export class JointSavingAccountOpeningPolicyValidator
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
    // [ ] 01. At least two introducer needed.
    if (introducers.length > 2) {
      throw new BadRequestException('At least two introducer needed.');
    }

    introducers.forEach((introducer) => {
      // [ ] 02. Account introducer need to be a person.
      CustomerPolicy.CustomerTypeCheck(
        introducer,
        CustomerType.Person,
        CustomerSubstitute.AccountIntroducer,
      );

      if (introducer instanceof HumanCustomerModel) {
        // [ ] 03. Account introducer need to be christian.
        CustomerPolicy.ReligionCheck(
          introducer,
          Religion.Christian,
          CustomerSubstitute.AccountIntroducer,
        );

        // [ ] 04. Account introducer must provide NID or BRN number.
        CustomerPolicy.NIDandBRNCheck(
          introducer,
          CustomerSubstitute.AccountIntroducer,
        );

        // [ ] 05. Account introducer need to be a saving account holder.
        CustomerPolicy.HasSavingAccountCheck(
          introducer,
          this.anyService,
          CustomerSubstitute.AccountIntroducer,
        );
      }
    });

    // [ ] 06. At least two account holder needed.
    if (holders.length < 2) {
      throw new BadRequestException('At least two account holder needed.');
    }

    holders.forEach((holder) => {
      // [ ] 07. Account holder need to be a person.
      CustomerPolicy.CustomerTypeCheck(
        holder,
        CustomerType.Person,
        CustomerSubstitute.AccountHolder,
      );

      if (holder instanceof HumanCustomerModel) {
        // [ ] 08. Account holder need to be christian.
        CustomerPolicy.ReligionCheck(
          holder,
          Religion.Christian,
          CustomerSubstitute.AccountHolder,
        );

        // [ ] 09. Account holder must provide date of birth, NID or BNR number and age is greater or equal to eighteen?
        CustomerPolicy.AgeCheck(holder, 18, CustomerSubstitute.AccountHolder);

        // [ ] 10. Account holder need to have saving account.
        CustomerPolicy.HasSavingAccountCheck(
          holder,
          this.anyService,
          CustomerSubstitute.AccountHolder,
        );
      }
    });

    // [ ] 11. At least one operator needed.
    if (operators.length < 1) {
      throw new BadRequestException('At least one operator needed.');
    }

    operators.forEach((operator) => {
      // [ ] 12. Only account holder can be account operator.
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

      // [ ] 13. Account operator need to be a person.
      CustomerPolicy.CustomerTypeCheck(
        operator,
        CustomerType.Person,
        CustomerSubstitute.AccountOperator,
      );

      if (operator instanceof HumanCustomerModel) {
        // [ ] 14. Account operator need to be christian.
        CustomerPolicy.ReligionCheck(
          operator,
          Religion.Christian,
          CustomerSubstitute.AccountOperator,
        );

        // [ ] 15. Account operator must provide date of birth, NID or BNR number and age is greater or equal to eighteen?
        CustomerPolicy.AgeCheck(
          operator,
          18,
          CustomerSubstitute.AccountOperator,
        );
      }
    });

    // [ ] 16. At least one nominee needed.
    if (nominees.length < 1) {
      throw new BadRequestException('At least one nominee needed.');
    }

    // [ ] 17. Nominees total percent should be equal to 100%
    CustomerPolicy.NomineesPercentCheck(
      nominees,
      CustomerSubstitute.AccountNominee,
    );
  }
}
