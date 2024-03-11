import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { RequestResponseLogModel } from 'src/logging/domain/entities/request-response-log.entity';
import { LoggerType } from 'src/logging/domain/enums/logger-type.enum';
import { DatabaseLoggingRepository } from 'src/logging/infrastructure/database-logging.repository';

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
    const requestedAt = new Date();

    return next.handle().pipe(
      tap((body) => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;

        const logObject = new RequestResponseLogModel();
        logObject.User = {};
        logObject.RequestMethod = request.method;
        logObject.UserAgent = request.headers['user-agent'];
        logObject.RequestedSent = requestedAt;
        logObject.RequestedReceived = new Date().toISOString();
        logObject.IP = request['ip'];
        logObject.Path = request.url;
        logObject.RequestQuery = request['query'];
        logObject.RequestBody = request?.body ? request.body : {};
        logObject.ResponseTime = responseTime;
        logObject.StatusCode = response['statusCode'];

        this._databaseLoggingRepository.createLog(logObject);

        // console.log({
        //   UserAgent: request.headers['user-agent'],
        //   RequestedAt: requestedAt,
        //   IP: request['ip'],
        //   RequestMethod: request.method,
        //   Path: request.url,
        //   RequestQuery: request['query'],
        //   RequestBody: request?.body,
        //   Response: body,
        //   ResponseTime: responseTime,
        //   Status: response['statusCode'],
        // });
      }),
    );
  }
}
