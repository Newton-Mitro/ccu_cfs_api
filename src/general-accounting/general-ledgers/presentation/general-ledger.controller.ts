import { Controller } from '@nestjs/common';
import { GeneralLedgerService } from '../application/general-ledger.service';

@Controller('chart-of-accounts')
export class GeneralLedgerController {
  constructor(private readonly generalLedgerService: GeneralLedgerService) {}
}
