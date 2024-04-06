import { BankAccountProps } from '../types/bank-account-props';

export class BankAccountModel {
  readonly bankAccountId: string;
  readonly bankName: string;
  readonly branch: string;
  readonly routingNumber: string;
  readonly accountNumber: string;
  readonly accountName: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly createdBy: string;
  readonly updatedBy: string;

  constructor(bankAccountProps: BankAccountProps) {
    this.bankAccountId = bankAccountProps.bankAccountId;
    this.bankName = bankAccountProps.bankName;
    this.branch = bankAccountProps.branch;
    this.routingNumber = bankAccountProps.routingNumber;
    this.accountNumber = bankAccountProps.accountNumber;
    this.accountName = bankAccountProps.accountName;
    this.createdAt = bankAccountProps.createdAt;
    this.updatedAt = bankAccountProps.updatedAt;
    this.createdBy = bankAccountProps.createdBy;
    this.updatedBy = bankAccountProps.updatedBy;
  }
}
