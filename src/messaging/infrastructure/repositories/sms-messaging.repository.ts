import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { map } from 'rxjs';
import { ISendableSMS } from '../../application/interfaces/sendable-sms.interface';
import { SendSMSOptions } from '../../presentation/contract/send-sms-options';

@Injectable()
export class SMSMessagingRepository implements ISendableSMS {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async sendSMS(sendSMSOptions: SendSMSOptions) {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return this.httpService
      .post(
        this.config.get('SMS_HOST')!,
        JSON.stringify({
          username: this.config.get('SMS_USER'),
          password: this.config.get('SMS_PASSWORD'),
          apicode: sendSMSOptions.apiCodeOrEndpoint,
          msisdn: sendSMSOptions.mobileNumber,
          countrycode: sendSMSOptions.countryCode,
          cli: sendSMSOptions.cli,
          messagetype: sendSMSOptions.messageType,
          message: sendSMSOptions.message,
          messageid: '0',
        }),
        requestConfig,
      )
      .pipe(
        map((response) => {
          return response.data;
        }),
      );
  }

  async checkSMSCreditBalance(sendSMSOptions: SendSMSOptions) {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.httpService
      .post(
        this.config.get('SMS_HOST')!,
        JSON.stringify({
          username: this.config.get('SMS_USER'),
          password: this.config.get('SMS_PASSWORD'),
          apicode: sendSMSOptions.apiCodeOrEndpoint,
          msisdn: sendSMSOptions.mobileNumber,
          countrycode: sendSMSOptions.countryCode,
          cli: sendSMSOptions.cli,
          messagetype: sendSMSOptions.messageType,
          message: sendSMSOptions.message,
          messageid: '0',
        }),
        requestConfig,
      )
      .pipe(
        map((response) => {
          return response.data;
        }),
      );
  }

  async checkSMSDeliveryReport(sendSMSOptions: SendSMSOptions) {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.httpService.post(this.config.get('SMS_HOST')!, {
      username: this.config.get('SMS_USER'),
      password: this.config.get('SMS_PASSWORD'),
      apicode: sendSMSOptions.apiCodeOrEndpoint,
      msisdn: sendSMSOptions.mobileNumber,
      countrycode: sendSMSOptions.countryCode,
      cli: sendSMSOptions.cli,
      messagetype: sendSMSOptions.messageType,
      message: sendSMSOptions.message,
      messageid: '0',
    });
  }
}
