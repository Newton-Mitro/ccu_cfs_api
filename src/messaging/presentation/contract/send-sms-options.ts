export class SendSMSOptions {
  mobileNumber: string;
  countryCode: string;
  message: string;
  cli?: string;
  messageType?: string;
  apiCodeOrEndpoint?: string;
  messageId?: string;
  context?: {
    [name: string]: any;
  };
}
