export class BankAccountDTO {
  constructor(
    readonly bank_account_id: string,
    readonly bank_name: string,
    readonly branch: string,
    readonly routing_number: string,
    readonly account_number: string,
    readonly account_name: string,
    readonly created_at: string,
    readonly updated_at: string,
    readonly created_by: string,
    readonly updated_by: string,
  ) {}
}
