import { Body, Controller, Logger, Post } from '@nestjs/common';
import { UUID } from 'src/common/utils/uuid.util';
import { EmailMessagingRepository } from 'src/messaging/infrastructure/repositories/email-messaging.repository';
import { SMSMessagingRepository } from 'src/messaging/infrastructure/repositories/sms-messaging.repository';
import { CreateSubsidiaryLedgerRequest } from '../application/contract/create-subsidiary-ledger.dto';
import { SubsidiaryLedgerAccountService } from '../application/subsidiary-ledger-account.service';

@Controller('SubsidiaryLedgerAccount')
export class SubsidiaryLedgerAccountController {
  private readonly logger = new Logger(SubsidiaryLedgerAccountController.name);
  constructor(
    private readonly subsidiaryLedgerAccountService: SubsidiaryLedgerAccountService,
    private readonly emailService: EmailMessagingRepository,
    private readonly smsService: SMSMessagingRepository,
  ) {}

  @Post()
  async create(
    @Body() subsidiaryLedgerAccountRequest: CreateSubsidiaryLedgerRequest,
  ) {
    const emailMessage = {
      from: '"CCU_CFS" <noreply@domain.com>',
      to: 'newtonmitro@gmail.com',
      subject: 'One Time Verification Code',
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

    // const res = await this.smsService.sendSMS(smsMessage);
    // return res;

    return this.subsidiaryLedgerAccountService.CreateAccount(
      subsidiaryLedgerAccountRequest,
    );
  }
}
