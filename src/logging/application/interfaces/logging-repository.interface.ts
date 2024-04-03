export interface ILoggingRepository {
  createSuccessLog(
    user: Object,
    userAgent: string,
    requestedAt: any,
    receivedAt: string,
    ip: string,
    method: string,
    path: string,
    query: Object,
    params: Object,
    body: Object,
    responseTime: number,
    statusCode: number,
  );

  createErrorLog(
    user: Object,
    userAgent: string,
    receivedAt: string,
    ip: string,
    method: string,
    path: string,
    query: Object,
    params: Object,
    body: Object,
    exceptionType: string,
    statusCode: number,
    errorMessage: any,
  );
}
