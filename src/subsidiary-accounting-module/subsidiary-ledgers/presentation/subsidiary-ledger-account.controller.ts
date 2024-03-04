import { Body, Controller, Post } from '@nestjs/common';
import { UUID } from 'src/common/utils/uuid.util';
import { EmailMessagingService } from 'src/messaging-module/infrastructure/email-messaging.service';
import { SMSMessagingService } from 'src/messaging-module/infrastructure/sms-messaging.service';
import { SubsidiaryLedgerAccountService } from '../application/subsidiary-ledger-account.service';
import { SubsidiaryLedgerAccountDTO } from './contract/dto/subsidiary-ledger-account.dto';

@Controller('SubsidiaryLedgerAccount')
export class SubsidiaryLedgerAccountController {
  constructor(
    private readonly subsidiaryLedgerAccountService: SubsidiaryLedgerAccountService,
    private readonly emailService: EmailMessagingService,
    private readonly smsService: SMSMessagingService,
  ) {}

  @Post()
  async create(@Body() subsidiaryLedgerAccountDTO: SubsidiaryLedgerAccountDTO) {
    const emailMessage = {
      from: '"Credit Solution" <info@cccul.com>',
      to: 'newtonmitro@gmail.com',
      subject: 'Test Subject',
      // text: 'Test Body',
      // html: '<h1>Hello world.</h1>',
      template: 'send-otp',
      context: { name: 'Newton Mitro', otp: UUID.makeAccountId(6) },
    };

    // const emailMessage = {
    //   from: '"Credit Solution" <info@cccul.com>',
    //   to: 'newtonmitro@gmail.com',
    //   subject: 'Test Subject',
    //   text: 'Test Body',
    //   html: '<h1>Hello world.</h1>',
    // };

    // const res = await this.emailService.sendMail(emailMessage);
    // return res;

    const smsMessage = {
      mobileNumber: '01704687376',
      countryCode: '880',
      message: 'SingleSMS_JesonTest1',
      cli: 'DhakaCredit',
      messageType: '1',
      apiCodeOrEndpoint: '1',
      messageId: '',
      context: { name: 'Newton Mitro', otp: UUID.makeAccountId(6) },
    };

    const res = await this.smsService.sendSMS(smsMessage);
    return res;

    return this.subsidiaryLedgerAccountService.CreateAccount(
      subsidiaryLedgerAccountDTO,
    );
  }
}
