import { BadRequestException } from '@nestjs/common';
import { CustomerType } from 'src/common/enums/customer-type.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { DateUtil } from 'src/common/utils/date.util';
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

export class PersonalMSAOpeningPolicyValidator implements IPolicyValidator {
  public ValidatePolicy(
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
  ) {
    // [ ] 01. PAP - Check if an account holder is provided
    if (holders.length !== 1) {
      throw new BadRequestException('An account holder needed.');
    }

    let minorAccountHolder: HumanCustomerModel;

    holders.forEach((holder) => {
      // [ ] 02. PAP - Check if account holder is a person?
      CustomerPolicy.CustomerTypeCheck(
        holder,
        CustomerType.PERSON,
        CustomerSubstitute.AccountHolder,
      );

      if (holder instanceof HumanCustomerModel) {
        // [ ] 03. PAP - Check if account holder religion is christian?
        CustomerPolicy.ReligionCheck(
          holder,
          Religion.CHRISTIAN,
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
        CustomerType.PERSON,
        CustomerSubstitute.AccountOperator,
      );

      if (operator instanceof HumanCustomerModel) {
        // [ ] 07. PAP - Check if account operator is christian
        CustomerPolicy.ReligionCheck(
          operator,
          Religion.CHRISTIAN,
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
