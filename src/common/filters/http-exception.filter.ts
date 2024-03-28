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
import { LoggerType } from 'src/logging/domain/enums/logger-type.enum';
import { DatabaseLoggingRepository } from 'src/logging/infrastructure/repositories/database-logging.repository';

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
    let message: any;
    // let message: any = exception['response']['message'];
    // const message: any = exception.message;

    message = exception.message;

    if (exception instanceof BadRequestException) {
      message = exception['response']['message'];
      status = exception.getStatus();
    }

    if (exception instanceof InternalServerErrorException) {
      status = exception.getStatus();
    }

    try {
      const user = {
        UserId: 'a2d3f3a3s5f5',
        UserName: 'john.doe@email.com',
        FullName: 'John Doe',
        Roles: ['User', 'Administrator', 'Collector'],
      };
      const requestMethod = request.method;
      const userAgent = request.headers['user-agent']!;
      const requestedReceived = new Date().toISOString();
      const ip = request['ip'];
      const path = request.url;
      const requestQuery = request['query'];
      const photo = request?.body!['photo'] ? 'omitted' : undefined;
      const logo = request?.body!['logo'] ? 'omitted' : undefined;
      const password = request?.body!['password'] ? 'omitted' : undefined;
      const confirmPassword = request?.body!['confirmPassword']
        ? 'omitted'
        : undefined;
      const requestBody = {
        ...request?.body!,
        photo,
        logo,
        password,
        confirmPassword,
      };
      const exceptionType = exception.name;
      const statusCode = status;
      const errorMessage = message;

      this._databaseLoggingRepository.createErrorLog(
        user,
        userAgent,
        requestedReceived,
        ip,
        requestMethod,
        path,
        requestQuery,
        requestBody,
        exceptionType,
        statusCode,
        errorMessage,
      );
    } catch {}

    response.status(status).json({
      message,
      error: exception.name,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
