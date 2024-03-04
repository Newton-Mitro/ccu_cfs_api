import { BadRequestException } from '@nestjs/common';
import { DateUtil } from 'src/common/utils/date.util';
import { CustomerType } from 'src/subsidiary-accounting-module/kyc/core/enum/customer-type.enum';
import { Religion } from 'src/subsidiary-accounting-module/kyc/core/enum/religion.enum';
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
export class PersonalHCSAccountOpeningPolicyValidator
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

    // [ ] 01. PAP - Check if an account holder is provided
    if (holders.length !== 1) {
      throw new BadRequestException('An account holder needed.');
    }

    let minorAccountHolder: HumanCustomerModel;

    holders.forEach((holder) => {
      // [ ] 02. PAP - Check if account holder is a person?
      CustomerPolicy.CustomerTypeCheck(
        holder,
        CustomerType.Person,
        CustomerSubstitute.AccountHolder,
      );

      if (holder instanceof HumanCustomerModel) {
        // [ ] 03. PAP - Check if account holder religion is christian?
        CustomerPolicy.ReligionCheck(
          holder,
          Religion.Christian,
          CustomerSubstitute.AccountHolder,
        );

        // [ ] 03. PAP - Check if account holder date of birth is given
        CustomerPolicy.DateOfBirthCheck(
          holder,
          CustomerSubstitute.AccountHolder,
        );

        const age = DateUtil.ageFromDateOfBirthday(holder.DateOfBirth);

        if (age < 18) {
          minorAccountHolder = holder;
        }

        // [ ] 05. PAP - Check if account operator date of birth, NID or BNR are given
        CustomerPolicy.NIDandBRNCheck(holder, CustomerSubstitute.AccountHolder);
      }
    });

    // [ ] 06. PAP - Check if an account operator is provided
    if (operators.length !== 1) {
      throw new BadRequestException('An operator needed.');
    }

    operators.forEach((operator) => {
      if (
        minorAccountHolder !== undefined &&
        minorAccountHolder.IdentificationNumber ===
          operator.IdentificationNumber
      ) {
        throw new BadRequestException(
          `Minor account holder can't not be account operator.`,
        );
      }
      // [ ] 02. PAP - Check if account holder is a person?
      CustomerPolicy.CustomerTypeCheck(
        operator,
        CustomerType.Person,
        CustomerSubstitute.AccountOperator,
      );

      if (operator instanceof HumanCustomerModel) {
        // [ ] 07. PAP - Check if account operator is christian
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

    // [ ] 11. PAP - Check if at least one nominee is provided
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
