import { BadRequestException } from '@nestjs/common';
import { UUID } from 'src/common/utils/uuid.util';
import { AccountStatus } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/account-status.enum';
import { AccountType } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/account-type.enum';
import { Branch } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/branch.enum';
import { ControlLedger } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/control-ledger';
import { DefaulterType } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/defaulter-type.enum';
import { IPolicyValidator } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/interface/policy-validators/policy-validator.interface';
import { IOpenableSubsidiaryLedger } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/interface/strategy/openable-subsidiary-ledger.interface';
import { BaseCustomerModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/base-customer.model';
import { CollateralModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/collateral.model';
import { IntroducerModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/introducer.model';
import { NomineeModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/nominee.model';
import { OperatorModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/operator.model';
import { ScheduleModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/schedule.model';
import { SubsidiaryLedgerAccountModel } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/model/subsidiary-ledger-account.model';
import { PersonalShareAccountOpeningPolicyValidator } from '../policy/open/personal-share-account-opening-policy-validator';
import { ShareAccountCommonOpeningPolicyValidator } from '../policy/open/share-account-common-opening-policy-validator';

export class OpenLikeShareAccount implements IOpenableSubsidiaryLedger {
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
    if (controlLedger !== ControlLedger.ShareAccount) {
      throw new BadRequestException('Invalid product type.');
    }
    // Common Account Policy
    let policyValidator: IPolicyValidator;
    policyValidator = new ShareAccountCommonOpeningPolicyValidator();
    policyValidator.ValidatePolicy(
      accountType,
      controlLedger,
      accountName,
      branch,
      holders,
      operators,
      interestRate,
      duration,
      protectionSchemePercent,
      openingAmount,
      installmentAmount,
      numberOfInstallment,
      stock,
      nominees,
      introducers,
      collaterals,
      schedules,
    );

    // Personal Account Policy
    if (accountType === AccountType.Personal) {
      policyValidator = new PersonalShareAccountOpeningPolicyValidator();
      policyValidator.ValidatePolicy(
        accountType,
        controlLedger,
        accountName,
        branch,
        holders,
        operators,
        interestRate,
        duration,
        protectionSchemePercent,
        openingAmount,
        installmentAmount,
        numberOfInstallment,
        stock,
        nominees,
        introducers,
        collaterals,
        schedules,
      );
    } else {
      throw new BadRequestException('Invalid account type.');
    }

    const accountModel = new SubsidiaryLedgerAccountModel();
    accountModel.setAccountNumber('MSA-' + UUID.makeAccountId(6)); // How to generate Account Number???
    accountModel.setAccountType(accountType);
    accountModel.setProductType(controlLedger);
    accountModel.setAccountName(accountName);
    accountModel.setBranch(branch);
    accountModel.setInterestRate(interestRate);
    accountModel.setOpeningDate(new Date().toUTCString());
    accountModel.setDefaulterType(DefaulterType.Regular);
    accountModel.setAccountStatus(AccountStatus.Inactive);
    accountModel.setDuration(duration); // Optional and set default value
    accountModel.setStock(stock); // Optional and set default value
    accountModel.setProtectionSchemePercent(protectionSchemePercent); // Optional and set default value
    accountModel.setOpeningAmount(openingAmount); // Optional and set default value
    accountModel.setInstallmentAmount(installmentAmount); // Optional and set default value
    accountModel.setNumberOfInstallment(numberOfInstallment); // Optional and set default value
    accountModel.setCollaterals(collaterals); // Optional and set default value
    accountModel.setSchedules(schedules); // Optional and set default value
    accountModel.setHolders(holders);
    accountModel.setIntroducers(introducers);
    accountModel.setOperators(operators);
    accountModel.setNominees(nominees);
    return accountModel;
  }
}
