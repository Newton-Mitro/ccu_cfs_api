import { Injectable } from '@nestjs/common';
import { CustomerType } from 'src/kyc/domain/enum/customer-type.enum';
import { CollateralModel } from 'src/subsidiary-accounting-module/collaterals/domain/model/collateral.model';
import { ScheduleModel } from 'src/subsidiary-accounting-module/schedules/domain/model/schedule.model';
import { IOpenableSubsidiaryLedger } from '../domain/interface/strategy/openable-subsidiary-ledger.interface';
import { BaseCustomerModel } from '../domain/model/base-customer.model';
import { HumanCustomerModel } from '../domain/model/human-customer.model';
import { IntroducerModel } from '../domain/model/introducer.model';
import { NomineeModel } from '../domain/model/nominee.model';
import { OperatorModel } from '../domain/model/operator.model';
import { OrganizationCustomerModel } from '../domain/model/organization-customer.model';
import { SubsidiaryLedgerAccountModel } from '../domain/model/subsidiary-ledger-account.model';
import { SubsidiaryLedgerCreatorFactory } from '../domain/subsidiary-ledger-creator-factory';
import { CreateSubsidiaryLedgerDTO } from '../presentation/contract/create-subsidiary-ledger.dto';

@Injectable()
export class SubsidiaryLedgerAccountService {
  constructor(
    private readonly subsidiaryLedgerCreatorFactory: SubsidiaryLedgerCreatorFactory,
  ) {}

  CreateAccount(
    subsidiaryLedgerAccountDTO: CreateSubsidiaryLedgerDTO,
  ): SubsidiaryLedgerAccountModel {
    const iOpenableSubsidiaryLedger: IOpenableSubsidiaryLedger =
      this.subsidiaryLedgerCreatorFactory.Create(
        subsidiaryLedgerAccountDTO.ControlLedger,
      );
    const holders: BaseCustomerModel[] = [];
    const introducers: IntroducerModel[] = [];
    const operators: OperatorModel[] = [];
    const nominees: NomineeModel[] = [];
    const collaterals: CollateralModel[] = [];
    const schedules: ScheduleModel[] = [];

    subsidiaryLedgerAccountDTO?.Holders?.forEach((holderDTO) => {
      let holder;

      if (holderDTO.CustomerType === CustomerType.Person) {
        holder = new HumanCustomerModel();
        holder.IdentificationNumber = holderDTO.IdentificationNumber;
        holder.NameEn = holderDTO.NameEn;
        holder.NameBn = holderDTO.NameBn;
        holder.Email = holderDTO.Email;
        holder.ContactNumber = holderDTO.ContactNumber;
        holder.DateOfBirth = holderDTO.DateOfBirth;
        holder.NID = holderDTO.NID;
        holder.BirthRegistrationNumber = holderDTO.BirthRegistrationNumber;
        holder.Gender = holderDTO.Gender;
        holder.Religion = holderDTO.Religion;
        holder.Profession = holderDTO.Profession;
        holder.MaritalStatus = holderDTO.MaritalStatus;
        holder.SavingAccountNumber = holderDTO.SavingAccountNumber;
        holder.CustomerType = holderDTO.CustomerType;
        holders.push(holder);
      }

      if (holderDTO.CustomerType === CustomerType.Organization) {
        holder = new OrganizationCustomerModel();
        holder.IdentificationNumber = holderDTO.IdentificationNumber;
        holder.NameEn = holderDTO.NameEn;
        holder.NameBn = holderDTO.NameBn;
        holder.Email = holderDTO.Email;
        holder.ContactNumber = holderDTO.ContactNumber;
        holder.CustomerType = holderDTO.CustomerType;
        holder.RegistrationNumber = holderDTO.RegistrationNumber;
        holder.RegistrationNumber = holderDTO.RegistrationNumber;
        holder.TIN = holderDTO.TIN;
        holder.Fax = holderDTO.Fax;
        holder.SavingAccountNumber = holderDTO.SavingAccountNumber;
        holders.push(holder);
      }
    });

    subsidiaryLedgerAccountDTO?.Introducers?.forEach((introducerDTO) => {
      const introducer: IntroducerModel = new IntroducerModel();
      introducer.IdentificationNumber = introducerDTO.IdentificationNumber;
      introducer.NameEn = introducerDTO.NameEn;
      introducer.NameBn = introducerDTO.NameBn;
      introducer.Email = introducerDTO.Email;
      introducer.ContactNumber = introducerDTO.ContactNumber;
      introducer.DateOfBirth = introducerDTO.DateOfBirth;
      introducer.NID = introducerDTO.NID;
      introducer.BirthRegistrationNumber =
        introducerDTO.BirthRegistrationNumber;
      introducer.Gender = introducerDTO.Gender;
      introducer.Religion = introducerDTO.Religion;
      introducer.Profession = introducerDTO.Profession;
      introducer.MaritalStatus = introducerDTO.MaritalStatus;
      introducer.SavingAccountNumber = introducerDTO.SavingAccountNumber;
      introducer.CustomerType = introducerDTO.CustomerType;
      introducers.push(introducer);
    });

    subsidiaryLedgerAccountDTO?.Operators?.forEach((operatorDTO) => {
      const operator: OperatorModel = new OperatorModel();
      operator.IdentificationNumber = operatorDTO.IdentificationNumber;
      operator.NameEn = operatorDTO.NameEn;
      operator.NameBn = operatorDTO.NameBn;
      operator.Email = operatorDTO.Email;
      operator.ContactNumber = operatorDTO.ContactNumber;
      operator.DateOfBirth = operatorDTO.DateOfBirth;
      operator.NID = operatorDTO.NID;
      operator.BirthRegistrationNumber = operatorDTO.BirthRegistrationNumber;
      operator.Gender = operatorDTO.Gender;
      operator.Religion = operatorDTO.Religion;
      operator.Profession = operatorDTO.Profession;
      operator.MaritalStatus = operatorDTO.MaritalStatus;
      operator.CustomerType = operatorDTO.CustomerType;
      operators.push(operator);
    });

    subsidiaryLedgerAccountDTO?.Nominees?.forEach((nomineeDTO) => {
      const nominee: NomineeModel = new NomineeModel();
      nominee.IdentificationNumber = nomineeDTO.IdentificationNumber;
      nominee.NameEn = nomineeDTO.NameEn;
      nominee.NameBn = nomineeDTO.NameBn;
      nominee.Email = nomineeDTO.Email;
      nominee.ContactNumber = nomineeDTO.ContactNumber;
      nominee.DateOfBirth = nomineeDTO.DateOfBirth;
      nominee.NID = nomineeDTO.NID;
      nominee.BirthRegistrationNumber = nomineeDTO.BirthRegistrationNumber;
      nominee.Gender = nomineeDTO.Gender;
      nominee.Religion = nomineeDTO.Religion;
      nominee.Profession = nomineeDTO.Profession;
      nominee.MaritalStatus = nomineeDTO.MaritalStatus;
      nominee.CustomerType = nomineeDTO.CustomerType;
      nominee.Relationship = nomineeDTO.Relationship;
      nominee.Percent = nomineeDTO.Percent;
      nominees.push(nominee);
    });

    subsidiaryLedgerAccountDTO?.Collaterals?.forEach((collateralDTO) => {
      const collateral: CollateralModel = new CollateralModel();
      collateral.CollateralType = collateralDTO.CollateralType;
      collateral.CollateralTakenFromAccount =
        collateralDTO.CollateralTakenFromAccount;
      collateral.CollateralGivenToAccount =
        collateralDTO.CollateralGivenToAccount;
      collateral.CollateralAmount = collateralDTO.CollateralAmount;
      collateral.CollateralStatus = collateralDTO.CollateralStatus;
      collaterals.push(collateral);
    });

    subsidiaryLedgerAccountDTO?.Schedules?.forEach((scheduleDTO) => {
      const schedule: ScheduleModel = new ScheduleModel();
      schedule.InstallmentNo = scheduleDTO.InstallmentNo;
      schedule.InstallmentDate = scheduleDTO.InstallmentDate;
      schedule.InstallmentYear = scheduleDTO.InstallmentYear;
      schedule.InstallmentMonth = scheduleDTO.InstallmentMonth;
      schedule.ScheduleType = scheduleDTO.ScheduleType;
      schedule.InstallmentType = scheduleDTO.InstallmentType;
      schedule.InstallmentAmount = scheduleDTO.InstallmentAmount;
      schedule.PaidInstallmentAmount = scheduleDTO.PaidInstallmentAmount;
      schedule.AdvancedPaidInstallmentAmount =
        scheduleDTO.AdvancedPaidInstallmentAmount;
      schedule.DueInstallmentAmount = scheduleDTO.DueInstallmentAmount;
      schedule.DueFineAmount = scheduleDTO.DueFineAmount;
      schedule.ScheduleProcessingDate = scheduleDTO.ScheduleProcessingDate;
      schedule.ScheduleStatus = scheduleDTO.ScheduleStatus;
      schedules.push(schedule);
    });

    return iOpenableSubsidiaryLedger.OpenSubsidiaryLedgerAccount(
      subsidiaryLedgerAccountDTO.AccountType,
      subsidiaryLedgerAccountDTO.ControlLedger,
      subsidiaryLedgerAccountDTO.AccountName,
      subsidiaryLedgerAccountDTO.Branch,
      holders,
      operators,
      subsidiaryLedgerAccountDTO.InterestRate,
      subsidiaryLedgerAccountDTO.Duration,
      subsidiaryLedgerAccountDTO.ProtectionSchemePercent,
      subsidiaryLedgerAccountDTO.OpeningAmount,
      subsidiaryLedgerAccountDTO.InstallmentAmount,
      subsidiaryLedgerAccountDTO.NumberOfInstallment,
      subsidiaryLedgerAccountDTO.Stock,
      nominees,
      introducers,
      collaterals,
      schedules,
    );
  }
}
