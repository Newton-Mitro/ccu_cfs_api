import { Module } from '@nestjs/common';
import { MessagingModule } from 'src/messaging/messaging.module';
import { SubsidiaryLedgerAccountService } from './deposits/products/savings/application/subsidiary-ledger-account.service';
import { SubsidiaryLedgerAccountController } from './deposits/products/savings/presentation/subsidiary-ledger-account.controller';

@Module({
  imports: [MessagingModule],
  controllers: [SubsidiaryLedgerAccountController],
  providers: [SubsidiaryLedgerAccountService],
})
export class SubsidiaryLedgersModule {}
