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
