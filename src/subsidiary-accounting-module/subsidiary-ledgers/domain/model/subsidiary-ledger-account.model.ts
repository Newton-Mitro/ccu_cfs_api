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
  private AccountId: string;
  private AccountType: AccountType;
  private ControlLedger: ControlLedger;
  private AccountNumber: string;
  private AccountName: string;
  private Branch: Branch;
  private Duration: number;
  private InterestRate: number;
  private Stock: number;
  private ProtectionSchemePercent: number;
  private OpeningAmount: number;
  private InstallmentAmount: number;
  private NumberOfInstallment: number;
  private Introducers: IntroducerModel[];
  private Holders: BaseCustomerModel[];
  private Operators: OperatorModel[];
  private Nominees: NomineeModel[];
  private OpeningDate: string;
  private MaturityDate: string;
  private ClosingDate: string;
  private DefaulterType: DefaulterType;
  private AccountStatus: AccountStatus;
  private RunningBalance: number;
  private TotalTakenSuretyAmount: number;
  private TotalGivenSuretyAmount: number;
  private TotalScheduleDefaultMonth: number;
  private CreatedAt: string;
  private UpdatedAt: string;
  private CreatedBy: string;
  private UpdatedBy: string;

  public constructor() {
    this.AccountId = uuidv4();
    this.AccountType = AccountType.Personal;
    this.ControlLedger = ControlLedger.SavingAccount;
    this.AccountNumber = '';
    this.AccountName = '';
    this.Branch = Branch.HeadOffice;
    this.Duration = 0.0;
    this.Stock = 0;
    this.InterestRate = 0.0;
    this.ProtectionSchemePercent = 0.0;
    this.OpeningAmount = 0.0;
    this.InstallmentAmount = 0.0;
    this.NumberOfInstallment = 0;
    this.Introducers = [];
    this.Holders = [];
    this.Operators = [];
    this.Nominees = [];
    this.OpeningDate = new Date().toUTCString();
    this.MaturityDate = '';
    this.ClosingDate = '';
    this.DefaulterType = DefaulterType.Regular;
    this.AccountStatus = AccountStatus.Inactive;
    this.RunningBalance = 0.0;
    this.TotalTakenSuretyAmount = 0.0;
    this.TotalGivenSuretyAmount = 0.0;
    this.TotalScheduleDefaultMonth = 0;
    this.CreatedAt = new Date().toUTCString();
    this.UpdatedAt = new Date().toUTCString();
    this.CreatedBy = '';
    this.UpdatedBy = '';
  }

  public getAccountId(): string {
    return this.AccountId;
  }

  public setAccountId(accountId: string): void {
    if (accountId === '') {
      throw new BadRequestException('Invalid account id.');
    }
    this.AccountId = accountId;
  }

  public getAccountType(): AccountType {
    return this.AccountType;
  }

  public setAccountType(accountType: AccountType): void {
    if (Object.values(AccountType).includes(accountType)) {
      this.AccountType = accountType;
    } else {
      throw new BadRequestException('Invalid account type.');
    }
  }

  public getProductType(): ControlLedger {
    return this.ControlLedger;
  }

  public setProductType(controlLedger: ControlLedger): void {
    if (Object.values(ControlLedger).includes(controlLedger)) {
      this.ControlLedger = controlLedger;
    } else {
      throw new BadRequestException('Invalid product type.');
    }
  }

  public getAccountNumber(): string {
    return this.AccountNumber;
  }

  public setAccountNumber(accountNumber: string): void {
    if (accountNumber === '') {
      throw new BadRequestException('Invalid account number.');
    }
    if (accountNumber.length < 6) {
      throw new BadRequestException('Invalid account number.');
    }
    this.AccountNumber = accountNumber;
  }

  public getAccountName(): string {
    return this.AccountName;
  }

  public setAccountName(accountName: string): void {
    if (accountName === '') {
      throw new BadRequestException('Invalid account name.');
    }
    this.AccountName = accountName;
  }

  public getBranch(): Branch {
    return this.Branch;
  }

  public setBranch(branch: Branch): void {
    if (Object.values(Branch).includes(branch)) {
      this.Branch = branch;
    } else {
      throw new BadRequestException('Invalid branch.');
    }
  }

  public getDuration(): number {
    return this.Duration;
  }

  public setDuration(duration: number): void {
    if (duration < 0) {
      throw new BadRequestException("Duration can't be negative.");
    }
    this.Duration = duration;
  }

  public getStock(): number {
    return this.Stock;
  }

  public setStock(Stock: number): void {
    if (Stock < 0) {
      throw new BadRequestException("Stock can't be negative.");
    }
    this.Stock = Stock;
  }

  public getInterestRate(): number {
    return this.InterestRate;
  }

  public setInterestRate(interestRate: number): void {
    if (interestRate < 0) {
      throw new BadRequestException("Interest rate can't be negative.");
    }
    this.InterestRate = interestRate;
  }

  public getProtectionSchemePercent(): number {
    return this.ProtectionSchemePercent;
  }

  public setProtectionSchemePercent(protectionSchemePercent: number): void {
    if (protectionSchemePercent < 0) {
      throw new BadRequestException(
        "Protection Scheme Percent rate can't be negative.",
      );
    }
    this.ProtectionSchemePercent = protectionSchemePercent;
  }

  public getOpeningAmount(): number {
    return this.OpeningAmount;
  }

  public setOpeningAmount(openingAmount: number): void {
    if (openingAmount < 0) {
      throw new BadRequestException("Opening Amount can't be negative.");
    }
    this.OpeningAmount = openingAmount;
  }

  public getInstallmentAmount(): number {
    return this.InstallmentAmount;
  }

  public setInstallmentAmount(installmentAmount: number): void {
    if (installmentAmount < 0) {
      throw new BadRequestException("Installment Amount can't be negative.");
    }
    this.InstallmentAmount = installmentAmount;
  }

  public getNumberOfInstallment(): number {
    return this.NumberOfInstallment;
  }

  public setNumberOfInstallment(numberOfInstallment: number): void {
    if (numberOfInstallment < 0) {
      throw new BadRequestException("Number Of Installment can't be negative.");
    }
    this.NumberOfInstallment = numberOfInstallment;
  }

  public getIntroducers(): IntroducerModel[] {
    return this.Introducers;
  }

  public setIntroducers(introducers: IntroducerModel[]): void {
    this.Introducers = introducers;
  }

  public getHolders(): BaseCustomerModel[] {
    return this.Holders;
  }

  public setHolders(holders: BaseCustomerModel[]): void {
    this.Holders = holders;
  }

  public getOperators(): OperatorModel[] {
    return this.Operators;
  }

  public setOperators(operators: OperatorModel[]): void {
    this.Operators = operators;
  }

  public getNominees(): NomineeModel[] {
    return this.Nominees;
  }

  public setNominees(nominees: NomineeModel[]): void {
    this.Nominees = nominees;
  }

  public getOpeningDate(): string {
    return this.OpeningDate;
  }

  public setOpeningDate(openingDate: string): void {
    if (openingDate === null) {
      throw new BadRequestException('Invalid opening date.');
    }
    this.OpeningDate = openingDate;
  }

  public getMaturityDate(): string {
    return this.MaturityDate;
  }

  public setMaturityDate(maturityDate: string): void {
    this.MaturityDate = maturityDate;
  }

  public getClosingDate(): string {
    return this.ClosingDate;
  }

  public setClosingDate(closingDate: string): void {
    this.ClosingDate = closingDate;
  }

  public getDefaulterType(): string {
    return this.DefaulterType;
  }

  public setDefaulterType(defaulterType: DefaulterType): void {
    if (Object.values(DefaulterType).includes(defaulterType)) {
      this.DefaulterType = defaulterType;
    } else {
      throw new BadRequestException('Invalid defaulter type.');
    }
  }

  public getAccountStatus(): string {
    return this.AccountStatus;
  }

  public setAccountStatus(accountStatus: AccountStatus): void {
    if (Object.values(AccountStatus).includes(accountStatus)) {
      this.AccountStatus = accountStatus;
    } else {
      throw new BadRequestException('Invalid account status.');
    }
  }

  public getRunningBalance(): number {
    return this.RunningBalance;
  }

  public setRunningBalance(runningBalance: number): void {
    this.RunningBalance = runningBalance;
  }

  public getTotalTakenSuretyAmount(): number {
    return this.TotalTakenSuretyAmount;
  }

  public setTotalTakenSuretyAmount(totalTakenSuretyAmount: number): void {
    this.TotalTakenSuretyAmount = totalTakenSuretyAmount;
  }

  public getTotalGivenSuretyAmount(): number {
    return this.TotalGivenSuretyAmount;
  }

  public setTotalGivenSuretyAmount(totalGivenSuretyAmount: number): void {
    this.TotalGivenSuretyAmount = totalGivenSuretyAmount;
  }

  public getTotalScheduleDefaultMonth(): number {
    return this.TotalScheduleDefaultMonth;
  }

  public setTotalScheduleDefaultMonth(totalScheduleDefaultMonth: number): void {
    this.TotalScheduleDefaultMonth = totalScheduleDefaultMonth;
  }

  public getCreatedBy(): string {
    return this.CreatedBy;
  }

  public setCreatedBy(CreatedBy: string): void {
    this.CreatedBy = CreatedBy;
  }

  public getUpdatedBy(): string {
    return this.UpdatedBy;
  }

  public setUpdatedBy(UpdatedBy: string): void {
    this.UpdatedBy = UpdatedBy;
  }

  public getCreatedAt(): string {
    return this.CreatedAt;
  }

  public setCreatedAt(CreatedAt: string): void {
    this.CreatedAt = CreatedAt;
  }

  public getUpdatedAt(): string {
    return this.UpdatedAt;
  }

  public setUpdatedAt(UpdatedAt: string): void {
    this.UpdatedAt = UpdatedAt;
  }
}
