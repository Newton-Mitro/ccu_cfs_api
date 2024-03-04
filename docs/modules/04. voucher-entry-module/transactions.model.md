```json
{
  "_id": "",
  "voucherId": "", // parent reference
  "voucherStatus": "Draft | Canceled | Pending | Approved",
  "transactionDate": "",
  "generalLedgerAccount": {
    "_id": "",
    "chartOfAccountId": "",
    "controlLedger": false,
    "controlLedgerType": "Cash at Hand | Cash at Bank | Petty Cash | Fixed Asset | Vendor | Deposit | Loan",
    "accountType": "Asset | Liability | Equity | Expense | Revenue",
    "ledgerNameEn": "",
    "ledgerNameBn": "",
    "ledgerCode": "",
    "runningBalance": 0.0,
    "active": true
  },
  "subsidiaryLedgerAccount": {
    "_id": "",
    "accountNameEn": "",
    "accountNameBn": "",
    "accountNumber": ""
  },
  "instrumentType": "Bill/Invoice | Cash Memo | Bank Cheque | Deposit Slip | Debit/Credit Card | Debit Note | Credit Note",
  "instrumentReference": "",
  "subsidiaryLedgerReference": "",
  "description": "",
  "debitAmount": 0.0,
  "creditAmount": 0.0,
  "isDeleted": false
}
```
