import { Module } from '@nestjs/common';
import { MessagingModule } from 'src/messaging/messaging.module';
import { SubsidiaryLedgerAccountService } from './deposits/application/subsidiary-ledger-account.service';
import { SubsidiaryLedgerAccountController } from './deposits/presentation/subsidiary-ledger-account.controller';

@Module({
  imports: [MessagingModule],
  controllers: [SubsidiaryLedgerAccountController],
  providers: [SubsidiaryLedgerAccountService],
})
export class SubsidiaryLedgersModule {}
