import { AuthUserType } from '../../../common/domain/types/auth-user.type';
import { LogRecordModel } from './log-record.entity';

export class SuccessLogRecordModel extends LogRecordModel {
  private _requestedAt: any;
  private _responseTime: number;

  constructor(
    id: string,
    user: any,
    userAgent: string,
    receivedAt: string,
    ip: string,
    method: string,
    path: string,
    query: any,
    params: any,
    body: any,
    statusCode: number,
    requestedAt: any,
    responseTime: number,
    createdAt: Date,
    updatedAt: Date,
    createdBy: AuthUserType | null,
    updatedBy: AuthUserType | null,
  ) {
    super(
      id,
      user,
      userAgent,
      receivedAt,
      ip,
      method,
      path,
      query,
      params,
      body,
      statusCode,
      createdAt,
      updatedAt,
      createdBy,
      updatedBy,
    );
    this._requestedAt = requestedAt;
    this._responseTime = responseTime;
  }

  public get requestedAt(): any {
    return this._requestedAt;
  }

  public get responseTime(): number {
    return this._responseTime;
  }
}
