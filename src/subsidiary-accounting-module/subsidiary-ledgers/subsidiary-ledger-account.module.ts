import { Module } from '@nestjs/common';
import { MessagingModule } from 'src/messaging-module/messaging.module';
import { SubsidiaryLedgerAccountService } from './application/subsidiary-ledger-account.service';
import { SubsidiaryLedgerCreatorFactory } from './core/subsidiary-ledger-creator-factory';
import { SubsidiaryLedgerAccountController } from './presentation/subsidiary-ledger-account.controller';

@Module({
  imports: [MessagingModule],
  controllers: [SubsidiaryLedgerAccountController],
  providers: [SubsidiaryLedgerAccountService, SubsidiaryLedgerCreatorFactory],
})
export class SubsidiaryLedgerAccountModule {}
