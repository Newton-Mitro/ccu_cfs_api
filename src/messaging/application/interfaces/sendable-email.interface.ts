import { ISendEmailOptions } from 'src/messaging/presentation/contract/send-email-options';

export interface ISendableEmail {
  sendEmail(smsOptions: ISendEmailOptions);
}
