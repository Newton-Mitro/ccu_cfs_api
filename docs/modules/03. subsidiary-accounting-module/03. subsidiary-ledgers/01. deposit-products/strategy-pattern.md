```
function ageFromDateOfBirthday(dateOfBirth: string): number {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

class UUID {
  static makeId(length: number): string {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  static makeAccountId(length: number): string {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
enum ControlLedger {
  SavingAccount = 'Saving Account',
  STDAccount = 'STD Account',
  ShareAccount = 'Share Account',
  BeeSaverAccount = 'Bee Saver Account',
  SmartSaverAccount = 'Smart Saver Account',
  MonthlySavingAccount = 'Monthly Saving Account',
}

enum AccountType {
  Personal = 'Personal',
  Joint = 'Joint',
  Organization = 'Organization',
}

enum CustomerType {
  Person = 'Person',
  Organization = 'Organization',
}

enum Branch {
  HeadOffice = 'Head Office',
  Mirpur = 'Mirpur',
  Monipuripara = 'Monipuripara',
  Shadhonpara = 'Shadhonpara',
}

enum DefaulterType {
  Regular = 'Regular',
  ShareDefaulter = 'Share Defaulter',
  LoanDefaulter = 'Loan Defaulter',
  SuretyDefaulter = 'Surety Defaulter',
  ScheduleDefaulter = 'Schedule Defaulter',
}

enum AccountStatus {
  Inactive = 'Inactive',
  Dorment = 'Dorment',
  Active = 'Active',
  Frozeen = 'Frozeen',
}

enum Gender {
  Male = 'Male',
  Female = 'Female',
  Others = 'Others',
}

enum Relationship {
  Self = 'Self',
  Father = 'Father',
  Mother = 'Mother',
}

// Request Contract
class IntroducerDTO {
  introducerIdentificationId: string = '';
  nameEn: string = '';
  nameBn: string = '';
}

class HolderDTO {
  holderIdentificationId: string = '';
  nameEn: string = '';
  nameBn: string = '';
  customerType: string = '';
  dateOfBirth: string = '';
}

class OperatorDTO {
  operatorIdentificationId: string = '';
  nameEn: string = '';
  nameBn: string = '';
  customerType: string = '';
  dateOfBirth: string = '';
}

class NomineeDTO {
  nomineesIdentificationId: string = '';
  nameEn: string = '';
  nameBn: string = '';
  nid: string = '';
  dateOfBirth: string = '';
  birthRegistrationNumber: string = '';
  gender: string = '';
  relationship: string = '';
  percent: number = 0;
}

class SubsidiaryLedgerAccountDTO {
  accountType: string;
  controlLedger: string;
  accountName: string;
  branch: string;
  duration: number;
  interestRate: number;
  protectionSchemePercent: number;
  installmentAmount: number;
  numberOfInstallment: number;
  introducers: IntroducerDTO[];
  holders: HolderDTO[];
  operators: OperatorDTO[];
  nominees: NomineeDTO[];

  constructor() {
    this.accountType = '';
    this.controlLedger = '';
    this.accountName = '';
    this.branch = '';
    this.duration = 0;
    this.interestRate = 0;
    this.protectionSchemePercent = 0;
    this.installmentAmount = 0;
    this.numberOfInstallment = 0;
    this.introducers = [];
    this.holders = [];
    this.operators = [];
    this.nominees = [];
  }
}

// Business Entity
class IntroducerModel {
  introducerIdentificationId: string = '';
  nameEn: string = '';
  nameBn: string = '';
}

class HolderModel {
  holderIdentificationId: string = '';
  nameEn: string = '';
  nameBn: string = '';
  dateOfBirth: string = '';
  customerType: string = '';
}

class OperatorModel {
  operatorIdentificationId: string = '';
  nameEn: string = '';
  nameBn: string = '';
  dateOfBirth: string = '';
  customerType: string = '';
}

class NomineeModel {
  nomineesIdentificationId: string = '';
  nameEn: string = '';
  nameBn: string = '';
  nid: string = '';
  dateOfBirth: string = '';
  birthRegistrationNumber: string = '';
  gender: string = '';
  relationship: string = '';
  percent: number = 0;
}

class SubsidiaryLedgerAccountModel {
  private accountId: string;
  private accountType: string;
  private controlLedger: string;
  private accountNumber: string;
  private accountName: string;
  private branch: string;
  private duration: number;
  private interestRate: number;
  private protectionSchemePercent: number;
  private installmentAmount: number;
  private numberOfInstallment: number;
  private introducers: IntroducerModel[];
  private holders: HolderModel[];
  private operators: OperatorModel[];
  private nominees: NomineeModel[];
  private openingDate: string;
  private maturityDate: string;
  private closingDate: string;
  private defaulterType: string;
  private accountStatus: string;
  private runningBalance: number;
  private totalAccountSurety: number;
  private totalScheduleDefaultMonth: number;
  private continuousScheduleDefaultMonth: number;

  public constructor() {
    this.accountId = '';
    this.accountType = AccountType.Personal;
    this.controlLedger = ControlLedger.SavingAccount;
    this.accountNumber = '';
    this.accountName = '';
    this.branch = Branch.HeadOffice;
    this.duration = 0;
    this.interestRate = 0;
    this.protectionSchemePercent = 0;
    this.installmentAmount = 0;
    this.numberOfInstallment = 0;
    this.introducers = [];
    this.holders = [];
    this.operators = [];
    this.nominees = [];
    this.openingDate = '';
    this.maturityDate = '';
    this.closingDate = '';
    this.defaulterType = DefaulterType.Regular;
    this.accountStatus = AccountStatus.Inactive;
    this.runningBalance = 0;
    this.totalAccountSurety = 0;
    this.totalScheduleDefaultMonth = 0;
    this.continuousScheduleDefaultMonth = 0;
  }

  public getAccountId(): string {
    return this.accountId;
  }

  public setAccountId(accountId: string): void {
    if (accountId === null || accountId === '') {
      throw new Error('Invalid account id.');
    }
    this.accountId = accountId;
  }

  public getAccountType(): string {
    return this.accountType;
  }

  public setAccountType(accountType: string): void {
    if (accountType === null || accountType === '') {
      throw new Error('Invalid account type.');
    }
    this.accountType = accountType;
  }

  public getProductType(): string {
    return this.controlLedger;
  }

  public setProductType(controlLedger: string): void {
    if (controlLedger === null || controlLedger === '') {
      throw new Error('Invalid product type.');
    }
    this.controlLedger = controlLedger;
  }

  public getAccountNumber(): string {
    return this.accountNumber;
  }

  public setAccountNumber(accountNumber: string): void {
    if (accountNumber === null || accountNumber === '') {
      throw new Error('Invalid account number.');
    }
    if (accountNumber.length < 6) {
      throw new Error('Invalid account number.');
    }
    this.accountNumber = accountNumber;
  }

  public getAccountName(): string {
    return this.accountName;
  }

  public setAccountName(accountName: string): void {
    if (accountName === null || accountName === '') {
      throw new Error('Invalid account name.');
    }
    this.accountName = accountName;
  }

  public getBranch(): string {
    return this.branch;
  }

  public setBranch(branch: string): void {
    if (branch === null || branch === '') {
      throw new Error('Invalid branch.');
    }
    this.branch = branch;
  }

  public getDuration(): number {
    return this.duration;
  }

  public setDuration(duration: number): void {
    if (duration < 0) {
      throw new Error("Duration can't be negative.");
    }
    this.duration = duration;
  }

  public getInterestRate(): number {
    return this.interestRate;
  }

  public setInterestRate(interestRate: number): void {
    if (interestRate < 0) {
      throw new Error("Interest rate can't be negative.");
    }
    this.interestRate = interestRate;
  }

  public getProtectionSchemePercent(): number {
    return this.protectionSchemePercent;
  }

  public setProtectionSchemePercent(protectionSchemePercent: number): void {
    if (protectionSchemePercent < 0) {
      throw new Error("Protection Scheme Percent rate can't be negative.");
    }
    this.protectionSchemePercent = protectionSchemePercent;
  }

  public getInstallmentAmount(): number {
    return this.installmentAmount;
  }

  public setInstallmentAmount(installmentAmount: number): void {
    if (installmentAmount < 0) {
      throw new Error("Installment Amount can't be negative.");
    }
    this.installmentAmount = installmentAmount;
  }

  public getNumberOfInstallment(): number {
    return this.numberOfInstallment;
  }

  public setNumberOfInstallment(numberOfInstallment: number): void {
    if (numberOfInstallment < 0) {
      throw new Error("Number Of Installment can't be negative.");
    }
    this.numberOfInstallment = numberOfInstallment;
  }

  public getIntroducers(): IntroducerModel[] {
    return this.introducers;
  }

  public setIntroducers(introducers: IntroducerModel[]): void {
    this.introducers = introducers;
  }

  public getHolders(): HolderModel[] {
    return this.holders;
  }

  public setHolders(holders: HolderModel[]): void {
    this.holders = holders;
  }

  public getOperators(): OperatorModel[] {
    return this.operators;
  }

  public setOperators(operators: OperatorModel[]): void {
    this.operators = operators;
  }

  public getNominees(): NomineeModel[] {
    return this.nominees;
  }

  public setNominees(nominees: NomineeModel[]): void {
    if (nominees.length > 0) {
      let totalPercent: number = 0;
      nominees.forEach(function (nominee) {
        totalPercent = totalPercent + nominee.percent;
      });
      if (totalPercent !== 100) {
        throw new Error('Invalid nominee percent.');
      }
    }
    this.nominees = nominees;
  }

  public getOpeningDate(): string {
    return this.openingDate;
  }

  public setOpeningDate(openingDate: string): void {
    if (openingDate === null || openingDate === '') {
      throw new Error('Invalid opening date.');
    }
    this.openingDate = openingDate;
  }

  public getMaturityDate(): string {
    return this.maturityDate;
  }

  public setMaturityDate(maturityDate: string): void {
    this.maturityDate = maturityDate;
  }

  public getClosingDate(): string {
    return this.closingDate;
  }

  public setClosingDate(closingDate: string): void {
    this.closingDate = closingDate;
  }

  public getDefaulterType(): string {
    return this.defaulterType;
  }

  public setDefaulterType(defaulterType: string): void {
    if (defaulterType === null || defaulterType === '') {
      throw new Error('Invalid defaulter type.');
    }
    this.defaulterType = defaulterType;
  }

  public getAccountStatus(): string {
    return this.accountStatus;
  }

  public setAccountStatus(accountStatus: string): void {
    if (accountStatus === null || accountStatus === '') {
      throw new Error('Invalid account status.');
    }
    this.accountStatus = accountStatus;
  }

  public getRunningBalance(): number {
    return this.runningBalance;
  }

  public setRunningBalance(runningBalance: number): void {
    this.runningBalance = runningBalance;
  }

  public getTotalAccountSurety(): number {
    return this.totalAccountSurety;
  }

  public setTotalAccountSurety(totalAccountSurety: number): void {
    this.totalAccountSurety = totalAccountSurety;
  }

  public getTotalScheduleDefaultMonth(): number {
    return this.totalScheduleDefaultMonth;
  }

  public setTotalScheduleDefaultMonth(totalScheduleDefaultMonth: number): void {
    this.totalScheduleDefaultMonth = totalScheduleDefaultMonth;
  }

  public getContinuousScheduleDefaultMonth(): number {
    return this.continuousScheduleDefaultMonth;
  }

  public setContinuousScheduleDefaultMonth(
    continuousScheduleDefaultMonth: number,
  ): void {
    this.continuousScheduleDefaultMonth = continuousScheduleDefaultMonth;
  }
}

// Subsidiary Ledger Account Creation Factory (Abstraction)
interface ISubsidiaryLedgerAccountCreationStrategy {
  CreateAccount(
    accountType: string,
    controlLedger: string,
    accountName: string,
    branch: string,
    interestRate: number,
    holders: HolderModel[],
    operators: OperatorModel[],
    nominees: NomineeModel[],
    introducers: IntroducerModel[],
    duration: number,
    protectionSchemePercent: number,
    installmentAmount: number,
    numberOfInstallment: number,
  ): SubsidiaryLedgerAccountModel;
}

// Implementation of Subsidiary Ledger Account Creation Factory
class subsidiaryLedgerAccountCreatorFactory {
  static Create(controlLedger: string): ISubsidiaryLedgerAccountCreationStrategy {
    const instance = eval(`new ${controlLedger}()`);
    return instance;
  }
}

// Strategy of Saving Account Creation
class SavingAccount implements ISubsidiaryLedgerAccountCreationStrategy {
  CreateAccount(
    accountType: string,
    controlLedger: string,
    accountName: string,
    branch: string,
    interestRate: number,
    holders: HolderModel[],
    operators: OperatorModel[],
    nominees: NomineeModel[],
    introducers: IntroducerModel[],
    duration: number,
    protectionSchemePercent: number,
    installmentAmount: number,
    numberOfInstallment: number,
  ): SubsidiaryLedgerAccountModel {
    if (accountType === AccountType.Organization) {
      throw new Error('Invalid account type.');
    }
    const accountModel = new SubsidiaryLedgerAccountModel();
    accountModel.setAccountId(UUID.makeId(16));
    accountModel.setAccountNumber(UUID.makeAccountId(6));
    accountModel.setAccountType(accountType);
    accountModel.setProductType(controlLedger);
    accountModel.setAccountName(accountName);
    accountModel.setBranch(branch);
    accountModel.setInterestRate(interestRate);
    accountModel.setOpeningDate(new Date().toISOString());
    accountModel.setDefaulterType(DefaulterType.Regular);
    accountModel.setAccountStatus(AccountStatus.Inactive);

    // Personal account policy
    if (accountType === AccountType.Personal) {
      holders.forEach((holder) => {
        if (holder.customerType !== CustomerType.Person) {
          throw new Error('Account holder need to be a person.');
        }
      });

      operators.forEach((operator) => {
        let age: number = ageFromDateOfBirthday(operator.dateOfBirth);

        if (age < 18) {
          throw new Error('Account operator need to be 18 years old.');
        }
      });

      if (operators.length !== 1) {
        throw new Error('One operator needed.');
      }

      if (holders.length !== 1) {
        throw new Error('One account holder needed.');
      }

      if (nominees.length < 1) {
        throw new Error('At leat one nominee needed.');
      }
    }

    // Joint account policy
    if (accountType === AccountType.Joint) {
      holders.forEach((holder) => {
        if (holder.customerType !== CustomerType.Person) {
          throw new Error('Account holder need to be a person.');
        }
      });

      if (holders.length < 2) {
        throw new Error('At leat two account holder needed.');
      }

      operators.forEach((operator) => {
        let age: number = ageFromDateOfBirthday(operator.dateOfBirth);

        if (age < 18) {
          throw new Error('Account operator need to be 18 years old.');
        }
      });

      if (operators.length < 1) {
        throw new Error('At least one operator needed.');
      }

      if (nominees.length < 1) {
        throw new Error('At leat one nominee needed.');
      }
    }

    accountModel.setHolders(holders);
    accountModel.setIntroducers(introducers);
    accountModel.setOperators(operators);
    accountModel.setNominees(nominees);
    return accountModel;
  }
}

// Strategy of STD Account Creation
class STDAccount implements ISubsidiaryLedgerAccountCreationStrategy {
  CreateAccount(
    accountType: string,
    controlLedger: string,
    accountName: string,
    branch: string,
    interestRate: number,
    holders: HolderModel[],
    operators: OperatorModel[],
    nominees: NomineeModel[],
    introducers: IntroducerModel[],
    duration: number,
    protectionSchemePercent: number,
    installmentAmount: number,
    numberOfInstallment: number,
  ): SubsidiaryLedgerAccountModel {
    const accountModel = new SubsidiaryLedgerAccountModel();
    accountModel.setAccountId(UUID.makeId(16));
    accountModel.setAccountNumber(UUID.makeAccountId(6));
    accountModel.setAccountType(accountType);
    accountModel.setProductType(controlLedger);
    accountModel.setAccountName(accountName);
    accountModel.setBranch(branch);
    accountModel.setInterestRate(interestRate);
    accountModel.setOpeningDate(new Date().toISOString());
    accountModel.setDefaulterType(DefaulterType.Regular);
    accountModel.setAccountStatus(AccountStatus.Inactive);

    // Personal account policy
    if (accountType === AccountType.Personal) {
      holders.forEach((holder) => {
        if (holder.customerType !== CustomerType.Person) {
          throw new Error('Account holder need to be a person.');
        }
      });

      operators.forEach((operator) => {
        let age: number = ageFromDateOfBirthday(operator.dateOfBirth);

        if (age < 18) {
          throw new Error('Account operator need to be 18 years old.');
        }
      });

      if (operators.length !== 1) {
        throw new Error('One operator needed.');
      }

      if (holders.length !== 1) {
        throw new Error('One account holder needed.');
      }

      if (nominees.length < 1) {
        throw new Error('At leat one nominee needed.');
      }
    }

    // Joint account policy
    if (accountType === AccountType.Joint) {
      holders.forEach((holder) => {
        if (holder.customerType !== CustomerType.Person) {
          throw new Error('Account holder need to be a person.');
        }
      });

      operators.forEach((operator) => {
        let age: number = ageFromDateOfBirthday(operator.dateOfBirth);

        if (age < 18) {
          throw new Error('Account operator need to be 18 years old.');
        }
      });

      if (holders.length < 2) {
        throw new Error('At leat two account holder needed.');
      }

      if (operators.length < 1) {
        throw new Error('At least one operator needed.');
      }

      if (nominees.length < 1) {
        throw new Error('At leat one nominee needed.');
      }
    }

    // Organization account policy
    if (accountType === AccountType.Organization) {
      holders.forEach((holder) => {
        if (holder.customerType !== CustomerType.Organization) {
          throw new Error('Account holder need to be a organization.');
        }
      });

      if (holders.length !== 1) {
        throw new Error('One account holder needed.');
      }

      operators.forEach((operator) => {
        if (operator.customerType !== CustomerType.Person) {
          throw new Error('Account operator need to be a person.');
        }
      });

      if (operators.length < 3) {
        throw new Error('At leat three account operator needed.');
      }

      if (nominees.length > 0) {
        throw new Error('No nominee needed.');
      }
    }

    accountModel.setHolders(holders);
    accountModel.setIntroducers(introducers);
    accountModel.setOperators(operators);
    accountModel.setNominees(nominees);
    return accountModel;
  }
}

class ShareAccount implements ISubsidiaryLedgerAccountCreationStrategy {
  CreateAccount(
    accountType: string,
    controlLedger: string,
    accountName: string,
    branch: string,
    interestRate: number,
    holders: HolderModel[],
    operators: OperatorModel[],
    nominees: NomineeModel[],
    introducers: IntroducerModel[],
    duration: number,
    protectionSchemePercent: number,
    installmentAmount: number,
    numberOfInstallment: number,
  ): SubsidiaryLedgerAccountModel {
    if (accountType !== AccountType.Personal) {
      throw new Error('Invalid account type.');
    }

    const accountModel = new SubsidiaryLedgerAccountModel();
    accountModel.setAccountId(UUID.makeId(16));
    accountModel.setAccountNumber(UUID.makeAccountId(6));
    accountModel.setAccountType(accountType);
    accountModel.setProductType(controlLedger);
    accountModel.setAccountName(accountName);
    accountModel.setBranch(branch);
    accountModel.setInterestRate(interestRate);
    accountModel.setOpeningDate(new Date().toISOString());
    accountModel.setDefaulterType(DefaulterType.Regular);
    accountModel.setAccountStatus(AccountStatus.Inactive);

    // Personal account policy
    if (accountType === AccountType.Personal) {
      holders.forEach((holder) => {
        if (holder.customerType !== CustomerType.Person) {
          throw new Error('Account holder need to be a person.');
        }

        let age: number = ageFromDateOfBirthday(holder.dateOfBirth);

        if (age < 18) {
          throw new Error('Account holder need to be 18 years old.');
        }
      });

      if (holders.length !== 1) {
        throw new Error('One account holder needed.');
      }

      if (introducers.length !== 2) {
        throw new Error('At least two introducer needed.');
      }

      operators.forEach((operator) => {
        if (operator.customerType !== CustomerType.Person) {
          throw new Error('Account operator need to be a person.');
        }

        let age: number = ageFromDateOfBirthday(operator.dateOfBirth);

        if (age < 18) {
          throw new Error('Account operator need to be 18 years old.');
        }
      });

      if (operators.length !== 1) {
        throw new Error('One operator needed.');
      }

      if (nominees.length < 1) {
        throw new Error('At leat one nominee needed.');
      }
    }

    accountModel.setHolders(holders);
    accountModel.setIntroducers(introducers);
    accountModel.setOperators(operators);
    accountModel.setNominees(nominees);
    return accountModel;
  }
}

// Strategy of STD Account Creation
class MonthlySavingAccount implements ISubsidiaryLedgerAccountCreationStrategy {
  CreateAccount(
    accountType: string,
    controlLedger: string,
    accountName: string,
    branch: string,
    interestRate: number,
    holders: HolderModel[],
    operators: OperatorModel[],
    nominees: NomineeModel[],
    introducers: IntroducerModel[],
    duration: number,
    protectionSchemePercent: number,
    installmentAmount: number,
    numberOfInstallment: number,
  ): SubsidiaryLedgerAccountModel {
    const accountModel = new SubsidiaryLedgerAccountModel();
    accountModel.setAccountId(UUID.makeId(16));
    accountModel.setAccountNumber(UUID.makeAccountId(6));
    accountModel.setAccountType(accountType);
    accountModel.setProductType(controlLedger);
    accountModel.setInstallmentAmount(installmentAmount);
    accountModel.setAccountName(accountName);
    accountModel.setBranch(branch);
    accountModel.setDuration(duration);
    accountModel.setNumberOfInstallment(numberOfInstallment);
    accountModel.setInterestRate(interestRate);
    accountModel.setProtectionSchemePercent(protectionSchemePercent);
    accountModel.setOpeningDate(new Date().toISOString());
    accountModel.setMaturityDate('');
    accountModel.setDefaulterType(DefaulterType.Regular);
    accountModel.setAccountStatus(AccountStatus.Inactive);

    // Personal account policy
    if (accountType === AccountType.Personal) {
      holders.forEach((holder) => {
        if (holder.customerType !== CustomerType.Person) {
          throw new Error('Account holder need to be a person.');
        }
      });

      operators.forEach((operator) => {
        let age: number = ageFromDateOfBirthday(operator.dateOfBirth);

        if (age < 18) {
          throw new Error('Account operator need to be 18 years old.');
        }
      });

      if (operators.length !== 1) {
        throw new Error('One operator needed.');
      }

      if (holders.length !== 1) {
        throw new Error('One account holder needed.');
      }

      if (nominees.length < 1) {
        throw new Error('At leat one nominee needed.');
      }
    }

    // Joint account policy
    if (accountType === AccountType.Joint) {
      holders.forEach((holder) => {
        if (holder.customerType !== CustomerType.Person) {
          throw new Error('Account holder need to be a person.');
        }
      });

      if (holders.length < 2) {
        throw new Error('At leat two account holder needed.');
      }

      if (operators.length < 1) {
        throw new Error('At least one operator needed.');
      }

      if (nominees.length < 1) {
        throw new Error('At leat one nominee needed.');
      }
    }

    // Organization account policy
    if (accountType === AccountType.Organization) {
      holders.forEach((holder) => {
        if (holder.customerType !== CustomerType.Organization) {
          throw new Error('Account holder need to be a organization.');
        }
      });

      if (holders.length !== 1) {
        throw new Error('One account holder needed.');
      }

      if (operators.length < 3) {
        throw new Error('At leat three account operator needed.');
      }

      if (nominees.length > 0) {
        throw new Error('No nominee needed.');
      }
    }

    accountModel.setHolders(holders);
    // accountModel.setIntroducers(introducers);
    accountModel.setOperators(operators);
    accountModel.setNominees(nominees);
    return accountModel;
  }
}
// -----------------------------------------------------------------------------------------------

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
class SubsidiaryLedgerAccountService {
  CreateAccount(
    subsidiaryLedgerAccountDTO: SubsidiaryLedgerAccountDTO,
  ): SubsidiaryLedgerAccountModel {
    const subsidiaryLedgerAccountCreator: ISubsidiaryLedgerAccountCreationStrategy =
      subsidiaryLedgerAccountCreatorFactory.Create(
        subsidiaryLedgerAccountDTO.controlLedger?.replace(/\s+/g, ''),
      );

    const holders: HolderModel[] = [];
    const introducers: IntroducerModel[] = [];
    const operators: OperatorModel[] = [];
    const nominees: NomineeModel[] = [];

    subsidiaryLedgerAccountDTO?.holders?.forEach((holderDTO) => {
      const holder: HolderModel = new HolderModel();
      holder.holderIdentificationId = holderDTO.holderIdentificationId;
      holder.nameEn = holderDTO.nameEn;
      holder.dateOfBirth = holderDTO.dateOfBirth;
      holders.push(holder);
    });

    subsidiaryLedgerAccountDTO?.introducers?.forEach((introducerDTO) => {
      const introducer: IntroducerModel = new IntroducerModel();
      introducer.introducerIdentificationId =
        introducerDTO.introducerIdentificationId;
      introducer.nameEn = introducerDTO.nameEn;
      introducers.push(introducer);
    });

    subsidiaryLedgerAccountDTO?.operators?.forEach((operatorDTO) => {
      const operator: OperatorModel = new OperatorModel();
      operator.operatorIdentificationId = operatorDTO.operatorIdentificationId;
      operator.nameEn = operatorDTO.nameEn;
      operators.push(operator);
    });

    subsidiaryLedgerAccountDTO?.nominees?.forEach((nomineeDTO) => {
      const nominee: NomineeModel = new NomineeModel();
      nominee.nomineesIdentificationId = nomineeDTO.nomineesIdentificationId;
      nominee.nameEn = nomineeDTO.nameEn;
      nominee.gender = nomineeDTO.gender;
      nominee.nid = nomineeDTO.nid;
      nominee.birthRegistrationNumber = nomineeDTO.birthRegistrationNumber;
      nominee.relationship = nomineeDTO.relationship;
      nominee.percent = nomineeDTO.percent;
      nominees.push(nominee);
    });

    return subsidiaryLedgerAccountCreator.CreateAccount(
      subsidiaryLedgerAccountDTO.accountType,
      subsidiaryLedgerAccountDTO.controlLedger,
      subsidiaryLedgerAccountDTO.accountName,
      subsidiaryLedgerAccountDTO.branch,
      subsidiaryLedgerAccountDTO.interestRate,
      subsidiaryLedgerAccountDTO.holders,
      subsidiaryLedgerAccountDTO.operators,
      subsidiaryLedgerAccountDTO.nominees,
      subsidiaryLedgerAccountDTO.introducers,
      subsidiaryLedgerAccountDTO.duration,
      subsidiaryLedgerAccountDTO.protectionSchemePercent,
      subsidiaryLedgerAccountDTO.installmentAmount,
      subsidiaryLedgerAccountDTO.numberOfInstallment,
    );
  }
}
// -----------------------------------------------------------------------------------------------

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Middlewares and Pipelines
// Controller Code
// Request DTO Object
const holders: HolderDTO[] = [];
const holder: HolderDTO = new HolderDTO();
holder.holderIdentificationId = UUID.makeId(16);
holder.nameEn = 'Raton Halder';
holder.dateOfBirth = '2010-03-13';
holder.customerType = CustomerType.Person;
holders.push(holder);

const introducers: IntroducerDTO[] = [];
const introducer: IntroducerDTO = new IntroducerDTO();
introducer.introducerIdentificationId = UUID.makeId(16);
introducer.nameEn = 'Raton Halder';
introducers.push(introducer);
introducers.push(introducer);

const operators: OperatorDTO[] = [];
const operator: OperatorDTO = new OperatorDTO();
operator.operatorIdentificationId = UUID.makeId(16);
operator.nameEn = 'Raton Halder';
operator.customerType = CustomerType.Person;
operator.dateOfBirth = '2000-03-13';
operators.push(operator);

const nominees: NomineeDTO[] = [];
const nominee: NomineeDTO = new NomineeDTO();
nominee.nomineesIdentificationId = UUID.makeId(16);
nominee.nameEn = 'Jane Doe';
nominee.gender = Gender.Male;
nominee.nid = '1234567890';
nominee.birthRegistrationNumber = '';
nominee.relationship = Relationship.Self;
nominee.percent = 100;
nominees.push(nominee);

const savingAccount = new SubsidiaryLedgerAccountDTO();
savingAccount.accountType = AccountType.Personal;
savingAccount.controlLedger = ControlLedger.SavingAccount;
savingAccount.accountName = 'Raton Halder';
savingAccount.branch = Branch.HeadOffice;
savingAccount.duration = 1;
savingAccount.interestRate = 3.0;
savingAccount.installmentAmount = 100.0;
savingAccount.numberOfInstallment = 12;
savingAccount.protectionSchemePercent = 0.5;
savingAccount.holders = holders;
savingAccount.introducers = introducers;
savingAccount.operators = operators;
savingAccount.nominees = nominees;

// Validate DTO Object

// Service
const subsidiaryLedgerAccountService = new SubsidiaryLedgerAccountService();
console.log(subsidiaryLedgerAccountService.CreateAccount(savingAccount));

// Map Business Entity to DTO Object

// Return result
// -----------------------------------------------------------------------------------------------

```
