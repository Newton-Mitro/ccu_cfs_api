import { Controller } from '@nestjs/common';
import { ChartOfAccountService } from '../application/chart-of-account.service';

@Controller('chart-of-accounts')
export class ChartOfAccountController {
  constructor(private readonly customerService: ChartOfAccountService) {}
}
