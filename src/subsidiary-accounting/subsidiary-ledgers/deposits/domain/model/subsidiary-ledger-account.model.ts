import { BadRequestException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { AccountStatus } from '../enum/account-status.enum';
import { AccountType } from '../enum/account-type.enum';
import { Branch } from '../enum/branch.enum';
import { ControlLedger } from '../enum/control-ledger';
import { DefaulterType } from '../enum/defaulter-type.enum';
import { BaseCustomerModel } from './base-customer.model';
import { IntroducerModel } from './introducer.model';
import { NomineeModel } from './nominee.model';
import { OperatorModel } from './operator.model';

export class SubsidiaryLedgerAccountModel {
  private _AccountId: string;
  private _AccountType: AccountType;
  private _ControlLedger: ControlLedger;
  private _AccountNumber: string;
  private _AccountName: string;
  private _Branch: Branch;
  private _Duration: number;
  private _InterestRate: number;
  private _Stock: number;
  private _ProtectionSchemePercent: number;
  private _OpeningAmount: number;
  private _InstallmentAmount: number;
  private _NumberOfInstallment: number;
  private _Introducers: IntroducerModel[];
  private _Holders: BaseCustomerModel[];
  private _Operators: OperatorModel[];
  private _Nominees: NomineeModel[];
  private _OpeningDate: string;
  private _MaturityDate: string;
  private _ClosingDate: string;
  private _DefaulterType: DefaulterType;
  private _AccountStatus: AccountStatus;
  private _RunningBalance: number;
  private _TotalTakenSuretyAmount: number;
  private _TotalGivenSuretyAmount: number;
  private _TotalScheduleDefaultMonth: number;
  private _CreatedAt: string;
  private _UpdatedAt: string;
  private _CreatedBy: string;
  private _UpdatedBy: string;

  public constructor() {
    this._AccountId = uuidv4();
    this._AccountType = AccountType.Personal;
    this._ControlLedger = ControlLedger.SavingAccount;
    this._AccountNumber = new Date().valueOf().toString();
    this._AccountName = '';
    this._Branch = Branch.HeadOffice;
    this._Duration = 0.0;
    this._Stock = 0;
    this._InterestRate = 0.0;
    this._ProtectionSchemePercent = 0.0;
    this._OpeningAmount = 0.0;
    this._InstallmentAmount = 0.0;
    this._NumberOfInstallment = 0;
    this._Introducers = [];
    this._Holders = [];
    this._Operators = [];
    this._Nominees = [];
    this._OpeningDate = new Date().toUTCString();
    this._MaturityDate = '';
    this._ClosingDate = '';
    this._DefaulterType = DefaulterType.Regular;
    this._AccountStatus = AccountStatus.Inactive;
    this._RunningBalance = 0.0;
    this._TotalTakenSuretyAmount = 0.0;
    this._TotalGivenSuretyAmount = 0.0;
    this._TotalScheduleDefaultMonth = 0;
    this._CreatedAt = new Date().toUTCString();
    this._UpdatedAt = new Date().toUTCString();
    this._CreatedBy = '';
    this._UpdatedBy = '';
  }

  public get AccountId(): string {
    return this._AccountId;
  }

  public set AccountId(accountId: string) {
    if (accountId === '') {
      throw new BadRequestException('Invalid account id.');
    }
    this._AccountId = accountId;
  }

  public get AccountType(): AccountType {
    return this._AccountType;
  }

  public set AccountType(accountType: AccountType) {
    if (Object.values(AccountType).includes(accountType)) {
      this._AccountType = accountType;
    } else {
      throw new BadRequestException('Invalid account type.');
    }
  }

  public get ProductType(): ControlLedger {
    return this._ControlLedger;
  }

  public set ProductType(controlLedger: ControlLedger) {
    if (Object.values(ControlLedger).includes(controlLedger)) {
      this._ControlLedger = controlLedger;
    } else {
      throw new BadRequestException('Invalid product type.');
    }
  }

  public get AccountNumber(): string {
    return this._AccountNumber;
  }

  public set AccountNumber(accountNumber: string) {
    if (accountNumber === '') {
      throw new BadRequestException('Invalid account number.');
    }
    if (accountNumber.length < 6) {
      throw new BadRequestException('Invalid account number.');
    }
    this._AccountNumber = accountNumber;
  }

  public get AccountName(): string {
    return this._AccountName;
  }

  public set AccountName(accountName: string) {
    if (accountName === '') {
      throw new BadRequestException('Invalid account name.');
    }
    this._AccountName = accountName;
  }

  public get Branch(): Branch {
    return this._Branch;
  }

  public set Branch(branch: Branch) {
    if (Object.values(Branch).includes(branch)) {
      this._Branch = branch;
    } else {
      throw new BadRequestException('Invalid branch.');
    }
  }

  public get Duration(): number {
    return this._Duration;
  }

  public set Duration(duration: number) {
    if (duration < 0) {
      throw new BadRequestException("Duration can't be negative.");
    }
    this._Duration = duration;
  }

  public get Stock(): number {
    return this._Stock;
  }

  public set Stock(Stock: number) {
    if (Stock < 0) {
      throw new BadRequestException("Stock can't be negative.");
    }
    this._Stock = Stock;
  }

  public get InterestRate(): number {
    return this._InterestRate;
  }

  public set InterestRate(interestRate: number) {
    if (interestRate < 0) {
      throw new BadRequestException("Interest rate can't be negative.");
    }
    this._InterestRate = interestRate;
  }

  public get ProtectionSchemePercent(): number {
    return this._ProtectionSchemePercent;
  }

  public set ProtectionSchemePercent(protectionSchemePercent: number) {
    if (protectionSchemePercent < 0) {
      throw new BadRequestException(
        "Protection Scheme Percent rate can't be negative.",
      );
    }
    this._ProtectionSchemePercent = protectionSchemePercent;
  }

  public get OpeningAmount(): number {
    return this._OpeningAmount;
  }

  public set OpeningAmount(openingAmount: number) {
    if (openingAmount < 0) {
      throw new BadRequestException("Opening Amount can't be negative.");
    }
    this._OpeningAmount = openingAmount;
  }

  public get InstallmentAmount(): number {
    return this._InstallmentAmount;
  }

  public set InstallmentAmount(installmentAmount: number) {
    if (installmentAmount < 0) {
      throw new BadRequestException("Installment Amount can't be negative.");
    }
    this._InstallmentAmount = installmentAmount;
  }

  public get NumberOfInstallment(): number {
    return this._NumberOfInstallment;
  }

  public set NumberOfInstallment(numberOfInstallment: number) {
    if (numberOfInstallment < 0) {
      throw new BadRequestException("Number Of Installment can't be negative.");
    }
    this._NumberOfInstallment = numberOfInstallment;
  }

  public get Introducers(): IntroducerModel[] {
    return this._Introducers;
  }

  public set Introducers(introducers: IntroducerModel[]) {
    this._Introducers = introducers;
  }

  public get Holders(): BaseCustomerModel[] {
    return this._Holders;
  }

  public set Holders(holders: BaseCustomerModel[]) {
    this._Holders = holders;
  }

  public get Operators(): OperatorModel[] {
    return this._Operators;
  }

  public set Operators(operators: OperatorModel[]) {
    this._Operators = operators;
  }

  public get Nominees(): NomineeModel[] {
    return this._Nominees;
  }

  public set Nominees(nominees: NomineeModel[]) {
    this._Nominees = nominees;
  }

  public get OpeningDate(): string {
    return this._OpeningDate;
  }

  public set OpeningDate(openingDate: string) {
    if (openingDate === null) {
      throw new BadRequestException('Invalid opening date.');
    }
    this._OpeningDate = openingDate;
  }

  public get MaturityDate(): string {
    return this._MaturityDate;
  }

  public set MaturityDate(maturityDate: string) {
    this._MaturityDate = maturityDate;
  }

  public get ClosingDate(): string {
    return this._ClosingDate;
  }

  public set ClosingDate(closingDate: string) {
    this._ClosingDate = closingDate;
  }

  public get DefaulterType(): string {
    return this._DefaulterType;
  }

  public set DefaulterType(defaulterType: DefaulterType) {
    if (Object.values(DefaulterType).includes(defaulterType)) {
      this._DefaulterType = defaulterType;
    } else {
      throw new BadRequestException('Invalid defaulter type.');
    }
  }

  public get AccountStatus(): string {
    return this._AccountStatus;
  }

  public set AccountStatus(accountStatus: AccountStatus) {
    if (Object.values(AccountStatus).includes(accountStatus)) {
      this._AccountStatus = accountStatus;
    } else {
      throw new BadRequestException('Invalid account status.');
    }
  }

  public get RunningBalance(): number {
    return this._RunningBalance;
  }

  public set RunningBalance(runningBalance: number) {
    this._RunningBalance = runningBalance;
  }

  public get TotalTakenSuretyAmount(): number {
    return this._TotalTakenSuretyAmount;
  }

  public set TotalTakenSuretyAmount(totalTakenSuretyAmount: number) {
    this._TotalTakenSuretyAmount = totalTakenSuretyAmount;
  }

  public get TotalGivenSuretyAmount(): number {
    return this._TotalGivenSuretyAmount;
  }

  public set TotalGivenSuretyAmount(totalGivenSuretyAmount: number) {
    this._TotalGivenSuretyAmount = totalGivenSuretyAmount;
  }

  public get TotalScheduleDefaultMonth(): number {
    return this._TotalScheduleDefaultMonth;
  }

  public set TotalScheduleDefaultMonth(totalScheduleDefaultMonth: number) {
    this._TotalScheduleDefaultMonth = totalScheduleDefaultMonth;
  }

  public get CreatedBy(): string {
    return this._CreatedBy;
  }

  public set CreatedBy(CreatedBy: string) {
    this._CreatedBy = CreatedBy;
  }

  public get UpdatedBy(): string {
    return this._UpdatedBy;
  }

  public set UpdatedBy(UpdatedBy: string) {
    this._UpdatedBy = UpdatedBy;
  }

  public get CreatedAt(): string {
    return this._CreatedAt;
  }

  public set CreatedAt(CreatedAt: string) {
    this._CreatedAt = CreatedAt;
  }

  public get UpdatedAt(): string {
    return this._UpdatedAt;
  }

  public set UpdatedAt(UpdatedAt: string) {
    this._UpdatedAt = UpdatedAt;
  }
}
