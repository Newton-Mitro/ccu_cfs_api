import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';
import { LoggerType } from 'src/logging/domain/enums/logger-type.enum';
import { DatabaseLoggingRepository } from 'src/logging/infrastructure/repositories/database-logging.repository';

@Injectable()
export class RequestResponseInterceptor implements NestInterceptor {
  _databaseLoggingRepository: DatabaseLoggingRepository;
  constructor(
    @Inject(LoggerType.DatabaseLogger)
    databaseLoggingRepository: DatabaseLoggingRepository,
  ) {
    this._databaseLoggingRepository = databaseLoggingRepository;
  }
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const startTime = Date.now();
    const _requestedAt = new Date();

    return next.handle().pipe(
      tap((body) => {
        const endTime = Date.now();
        const _responseTime = endTime - startTime;

        try {
          const user = request.user;
          const requestMethod = request.method;
          const UserAgent = request.headers['user-agent'];
          const requestedAt = _requestedAt;
          const receivedAt = new Date().toISOString();
          const ip = request.ip;
          const path = request.path;
          const requestQuery = request.query;
          const params = request.params;
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
          const responseTime = _responseTime;
          const statusCode = response['statusCode'];

          this._databaseLoggingRepository.createSuccessLog(
            user!,
            UserAgent!,
            requestedAt,
            receivedAt,
            ip,
            requestMethod,
            path,
            requestQuery,
            params,
            requestBody,
            responseTime,
            statusCode,
          );
        } catch (error) {}
      }),
    );
  }
}
