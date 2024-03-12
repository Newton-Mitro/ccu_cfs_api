import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ISendEmailOptions } from 'src/messaging/presentation/contract/send-email-options';
import { ISendableEmail } from '../../application/interfaces/sendable-email.interface';

@Injectable()
export class EmailMessagingRepository implements ISendableEmail {
  constructor(private mailerService: MailerService) {}

  async sendEmail(sendMailOptions: ISendEmailOptions) {
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
}
