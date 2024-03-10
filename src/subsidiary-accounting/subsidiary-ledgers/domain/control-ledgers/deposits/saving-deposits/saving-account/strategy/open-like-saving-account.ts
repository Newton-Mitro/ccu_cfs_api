import { BadRequestException } from '@nestjs/common';
import { CollateralModel } from 'src/subsidiary-accounting/collaterals/domain/model/collateral.model';
import { ScheduleModel } from 'src/subsidiary-accounting/schedules/domain/model/schedule.model';
import { AccountStatus } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/account-status.enum';
import { AccountType } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/account-type.enum';
import { Branch } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/branch.enum';
import { ControlLedger } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/control-ledger';
import { DefaulterType } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/enum/defaulter-type.enum';
import { IPolicyValidator } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/interface/policy-validators/policy-validator.interface';
import { IOpenableSubsidiaryLedger } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/interface/strategy/openable-subsidiary-ledger.interface';
import { BaseCustomerModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/base-customer.model';
import { IntroducerModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/introducer.model';
import { NomineeModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/nominee.model';
import { OperatorModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/operator.model';
import { SubsidiaryLedgerAccountModel } from 'src/subsidiary-accounting/subsidiary-ledgers/domain/model/subsidiary-ledger-account.model';
import { JointSavingAccountOpeningPolicyValidator } from '../policy/open/joint-saving-account-opening-policy-validator';
import { OrganizationalSavingAccountOpeningPolicyValidator } from '../policy/open/organizational-saving-account-opening-policy-validator';
import { PersonalSavingAccountOpeningPolicyValidator } from '../policy/open/personal-saving-account-opening-policy-validator';
import { SavingAccountCommonOpeningPolicyValidator } from '../policy/open/saving-account-common-opening-policy-validator';

export class OpenLikeSavingAccount implements IOpenableSubsidiaryLedger {
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
    if (controlLedger !== ControlLedger.SavingAccount) {
      throw new BadRequestException('Invalid product type.');
    }
    // Common Account Policy
    let policyValidator: IPolicyValidator;
    policyValidator = new SavingAccountCommonOpeningPolicyValidator();
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
      policyValidator = new PersonalSavingAccountOpeningPolicyValidator();
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
    }

    // Joint Account Policy
    if (accountType === AccountType.Joint) {
      policyValidator = new JointSavingAccountOpeningPolicyValidator();
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
    }

    // Organizational Account Policy
    if (accountType === AccountType.Organizational) {
      policyValidator = new OrganizationalSavingAccountOpeningPolicyValidator();
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
    }

    const accountModel = new SubsidiaryLedgerAccountModel();

    accountModel.AccountType = accountType;
    accountModel.ProductType = controlLedger;
    accountModel.AccountName = accountName;
    accountModel.Branch = branch;
    accountModel.InterestRate = interestRate;
    accountModel.OpeningDate = new Date().toUTCString();
    accountModel.DefaulterType = DefaulterType.Regular;
    accountModel.AccountStatus = AccountStatus.Inactive;
    accountModel.Duration = duration; // Optional and set default value
    accountModel.Stock = stock; // Optional and set default value
    accountModel.ProtectionSchemePercent = protectionSchemePercent; // Optional and set default value
    accountModel.OpeningAmount = openingAmount; // Optional and set default value
    accountModel.InstallmentAmount = installmentAmount; // Optional and set default value
    accountModel.NumberOfInstallment = numberOfInstallment; // Optional and set default value
    accountModel.Holders = holders;
    accountModel.Introducers = introducers;
    accountModel.Operators = operators;
    accountModel.Nominees = nominees;
    return accountModel;
  }
}
