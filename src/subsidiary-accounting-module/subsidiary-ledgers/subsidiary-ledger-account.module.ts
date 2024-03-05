import { Module } from '@nestjs/common';
import { MessagingModule } from 'src/messaging-module/messaging.module';
import { SubsidiaryLedgerAccountService } from './application/subsidiary-ledger-account.service';
import { SubsidiaryLedgerAccountController } from './presentation/subsidiary-ledger-account.controller';
import { SubsidiaryLedgerCreatorFactory } from './domain/subsidiary-ledger-creator-factory';

@Module({
  imports: [MessagingModule],
  controllers: [SubsidiaryLedgerAccountController],
  providers: [SubsidiaryLedgerAccountService, SubsidiaryLedgerCreatorFactory],
})
export class SubsidiaryLedgerAccountModule {}
