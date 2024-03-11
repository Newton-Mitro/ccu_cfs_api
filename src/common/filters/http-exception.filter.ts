import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { RequestResponseLogModel } from 'src/logging/domain/entities/request-response-log.entity';
import { LoggerType } from 'src/logging/domain/enums/logger-type.enum';
import { DatabaseLoggingRepository } from 'src/logging/infrastructure/database-logging.repository';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  _databaseLoggingRepository: DatabaseLoggingRepository;
  constructor(
    @Inject(LoggerType.DatabaseLogger)
    databaseLoggingRepository: DatabaseLoggingRepository,
  ) {
    this._databaseLoggingRepository = databaseLoggingRepository;
  }

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

    const logObject = new RequestResponseLogModel();
    logObject.ExceptionType = exception.name;
    logObject.RequestMethod = request.method;
    logObject.UserAgent = request.headers['user-agent']!;
    logObject.RequestedSent = request.headers['RequestedSent'];
    logObject.IP = request['ip'];
    logObject.Path = request.url;
    logObject.RequestQuery = request['query'];
    logObject.RequestBody = request?.body;
    logObject.ErrorMessage = message;
    logObject.RequestedReceived = new Date().toISOString();
    logObject.StatusCode = status;

    this._databaseLoggingRepository.createLog(logObject);

    // console.log({
    //   UserAgent: request.headers['user-agent'],
    //   RequestedAt: null,
    //   IP: request['ip'],
    //   RequestMethod: request.method,
    //   Path: request.url,
    //   RequestQuery: request['query'],
    //   RequestBody: request?.body,
    //   ExceptionType: exception.name,
    //   Response: message,
    //   ResponseTime: null,
    //   Status: status,
    // });

    response.status(status).json({
      message,
      error: exception.name,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
