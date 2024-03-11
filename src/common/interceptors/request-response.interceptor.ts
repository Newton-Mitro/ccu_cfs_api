import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class RequestResponseInterceptor implements NestInterceptor {
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

        console.log({
          UserAgent: request.headers['user-agent'],
          RequestedAt: requestedAt,
          IP: request['ip'],
          RequestMethod: request.method,
          Path: request.url,
          RequestQuery: request['query'],
          RequestBody: request?.body,
          Response: body,
          ResponseTime: responseTime,
          Status: response['statusCode'],
        });
      }),
    );
  }
}
