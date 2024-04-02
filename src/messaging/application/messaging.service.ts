import { Injectable } from '@nestjs/common';
import { EmailMessagingRepository } from '../infrastructure/repositories/email-messaging.repository';
import { SMSMessagingRepository } from '../infrastructure/repositories/sms-messaging.repository';
import { ISendEmailOptions } from '../presentation/contract/send-email-options';
import { SendSMSOptions } from '../presentation/contract/send-sms-options';

@Injectable()
export class MessagingService {
  constructor(
    private readonly emailMessagingRepository: EmailMessagingRepository,
    private readonly smsMessagingRepository: SMSMessagingRepository,
  ) {}

  async sendSMS(sendSMSOptions: SendSMSOptions) {
    this.smsMessagingRepository.sendSMS(sendSMSOptions);
  }

  async sendEmail(sendEmailOptions: ISendEmailOptions) {
    this.emailMessagingRepository.sendEmail(sendEmailOptions);
  }
}
