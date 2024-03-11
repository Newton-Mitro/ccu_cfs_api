import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: any = exception['response']['message'];
    // const message: any = exception.message;

    if (exception instanceof BadRequestException) {
      console.log('BadRequestException');
      status = exception.getStatus();
    }

    if (exception instanceof InternalServerErrorException) {
      console.log('InternalServerErrorException');
      status = exception.getStatus();
    }

    console.log({
      UserAgent: request.headers['user-agent'],
      RequestedAt: null,
      IP: request['ip'],
      RequestMethod: request.method,
      Path: request.url,
      RequestQuery: request['query'],
      RequestBody: request?.body,
      ExceptionType: exception.name,
      Response: message,
      ResponseTime: null,
      Status: status,
    });

    response.status(status).json({
      message,
      error: exception.name,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
