export interface ILoggingRepository {
  createSuccessLog(
    user: Object,
    userAgent: string,
    requestedAt: any,
    receivedAt: string,
    ip: string,
    requestMethod: string,
    path: string,
    requestQuery: Object,
    requestBody: Object,
    responseTime: number,
    statusCode: number,
  );
  createErrorLog(
    user: Object,
    userAgent: string,
    receivedAt: string,
    ip: string,
    requestMethod: string,
    path: string,
    requestQuery: Object,
    requestBody: Object,
    exceptionType: string,
    statusCode: number,
    errorMessage: any,
  );
}
