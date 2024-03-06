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
    let message: any = exception.message;

    if (exception instanceof BadRequestException) {
      console.log('BadRequestException');
      status = exception.getStatus();
      message = exception.getResponse();
    }

    if (exception instanceof InternalServerErrorException) {
      console.log('InternalServerErrorException');
      status = exception.getStatus();
      message = exception.getResponse();
    }

    response.status(status).json({
      message,
      error: exception.name,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
