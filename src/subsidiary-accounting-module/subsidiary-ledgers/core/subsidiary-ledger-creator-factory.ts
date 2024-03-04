import { Injectable } from '@nestjs/common';
import { controlLedgerMap } from './utils/control-ledger-map';

@Injectable()
export class SubsidiaryLedgerCreatorFactory {
  public Create(controlLedger: string) {
    return new controlLedgerMap[controlLedger]();
  }
}
