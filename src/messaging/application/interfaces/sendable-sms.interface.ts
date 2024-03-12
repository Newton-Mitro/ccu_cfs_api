import { SendSMSOptions } from 'src/messaging/presentation/contract/send-sms-options';

export interface ISendableSMS {
  sendSMS(smsOptions: SendSMSOptions);
}
