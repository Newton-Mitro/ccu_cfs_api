import { BankCash } from '../control-ledgers/cash-treasury/cash-at-bank/bank-cash/bank-cash';
import { CollectorCash } from '../control-ledgers/cash-treasury/cash-at-hand/collector-cash/collector-cash';
import { TellerCash } from '../control-ledgers/cash-treasury/cash-at-hand/teller-cash/teller-cash';
import { VaultCash } from '../control-ledgers/cash-treasury/cash-at-hand/vault-cash/vault-cash';
import { BranchPettyCash } from '../control-ledgers/cash-treasury/petty-cash/branch-petty-cash/branch-petty-cash';
import { DepartmentPettyCash } from '../control-ledgers/cash-treasury/petty-cash/department-petty-cash/department-petty-cash';
import { DoubleDepositAccount } from '../control-ledgers/deposits/fixed-deposits/double-deposit-account/double-deposit-account';
import { QuarterlySavingAccount } from '../control-ledgers/deposits/fixed-deposits/quarterly-saving-account/quarterly-saving-account';
import { SavingAccount } from '../control-ledgers/deposits/saving-deposits/saving-account/saving-account';
import { ShortTermDepositAccount } from '../control-ledgers/deposits/saving-deposits/std-account/short-term-deposit-account';
import { ShareAccount } from '../control-ledgers/deposits/share-deposits/share-account/share-account';
import { HealthCareSchemeAccount } from '../control-ledgers/deposits/term-deposits/hcs-account/health-care-scheme-account';
import { MonthlySavingAccount } from '../control-ledgers/deposits/term-deposits/monthly-saving-account/monthly-saving-account';
import { GeneralLoan } from '../control-ledgers/loans/members-loans/general-loan/general-loan';
import { ControlLedger } from '../enum/control-ledger';

export const controlLedgerMap = {
  // Saving Deposit
  [ControlLedger.SavingAccount]: SavingAccount,
  [ControlLedger.ShortTermDepositAccount]: ShortTermDepositAccount,
  // Share Deposit
  [ControlLedger.ShareAccount]: ShareAccount,
  // Term Deposit
  [ControlLedger.MonthlySavingAccount]: MonthlySavingAccount,
  [ControlLedger.HealthCareSchemeAccount]: HealthCareSchemeAccount,
  // Fixed Deposit
  [ControlLedger.DoubleDepositAccount]: DoubleDepositAccount,
  [ControlLedger.QuarterlySavingAccount]: QuarterlySavingAccount,
  // Cash at Bank
  [ControlLedger.BankCash]: BankCash,
  // Cash at Hand
  [ControlLedger.CollectorCash]: CollectorCash,
  [ControlLedger.TellerCash]: TellerCash,
  [ControlLedger.VaultCash]: VaultCash,
  // Petty Cash
  [ControlLedger.BranchPettyCash]: BranchPettyCash,
  [ControlLedger.DepartmentPettyCash]: DepartmentPettyCash,
  // Members Loan
  [ControlLedger.GeneralLoan]: GeneralLoan,
  // Fixed Asset

  // Payable

  // Receivables
};
