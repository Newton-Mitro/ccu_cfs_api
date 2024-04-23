import { AuthUserType } from '../../../common/types/auth-user.type';

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
    createdAt: Date,
    updatedAt: Date,
    createdBy: AuthUserType | null,
    updatedBy: AuthUserType | null,
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
    createdAt: Date,
    updatedAt: Date,
    createdBy: AuthUserType | null,
    updatedBy: AuthUserType | null,
  );
}
