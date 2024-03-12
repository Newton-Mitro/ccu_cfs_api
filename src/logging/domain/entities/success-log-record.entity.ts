import { LogRecordModel } from './log-record.entity';

export class SuccessLogRecordModel extends LogRecordModel {
  private _RequestedAt: any;
  private _ResponseTime: number;

  constructor(
    user: Object,
    userAgent: string,
    ReceivedAt: string,
    ip: string,
    requestMethod: string,
    path: string,
    requestQuery: Object,
    requestBody: Object,
    statusCode: number,
    requestedAt: any,
    responseTime: number,
  ) {
    super(
      user,
      userAgent,
      ReceivedAt,
      ip,
      requestMethod,
      path,
      requestQuery,
      requestBody,
      statusCode,
    );
    this._RequestedAt = requestedAt;
    this._ResponseTime = responseTime;
  }

  public get RequestedAt(): any {
    return this._RequestedAt;
  }

  public set RequestedAt(value: any) {
    this._RequestedAt = value;
  }

  public get ResponseTime(): number {
    return this._ResponseTime;
  }
  public set ResponseTime(value: number) {
    this._ResponseTime = value;
  }
}
