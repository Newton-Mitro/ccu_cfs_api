import { Module } from '@nestjs/common';
import { KycAttachmentsService } from './application/kyc-attachments.service';
import { KycAttachmentsController } from './presentation/kyc-attachments.controller';

@Module({
  controllers: [KycAttachmentsController],
  providers: [KycAttachmentsService],
})
export class KycAttachmentsModule {}
