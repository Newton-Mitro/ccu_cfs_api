import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { map } from 'rxjs';
import { ISendSMSOptions } from '../domain/send-sms-options.interface';

@Injectable()
export class SMSMessagingService {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async sendSMS(sendSMSOptions: ISendSMSOptions) {
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

  async checkSMSCreditBalance(sendSMSOptions: ISendSMSOptions) {
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

  async checkSMSDeliveryReport(sendSMSOptions: ISendSMSOptions) {
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
