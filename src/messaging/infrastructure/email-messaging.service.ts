import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailMessagingService {
  constructor(private mailerService: MailerService) {}

  async sendMail(sendMailOptions: ISendMailOptions) {
    const res = sendMailOptions.template
      ? await this.mailerService.sendMail({
          to: sendMailOptions.to,
          from: sendMailOptions.from, // override default from
          subject: sendMailOptions.subject,
          template: sendMailOptions.template, // `.hbs` extension is appended automatically
          context: sendMailOptions.context,
        })
      : await this.mailerService.sendMail({
          to: sendMailOptions.to,
          from: sendMailOptions.from, // override default from
          subject: sendMailOptions.subject,
          text: sendMailOptions.text,
          html: sendMailOptions.html,
        });

    return res;
  }

  async sendOTP(sendMailOptions: ISendMailOptions) {}
}
