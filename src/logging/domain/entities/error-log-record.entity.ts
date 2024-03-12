import { LogRecordModel } from './log-record.entity';

export class ErrorLogRecordModel extends LogRecordModel {
  private _ExceptionType: string;
  private _ErrorMessage: any;

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
    exceptionType: string,
    errorMessage: any,
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
    this._ExceptionType = exceptionType;
    this._ErrorMessage = errorMessage;
  }

  public get ExceptionType(): string {
    return this._ExceptionType;
  }
  public set ExceptionType(value: string) {
    this._ExceptionType = value;
  }

  public get ErrorMessage(): any {
    return this._ErrorMessage;
  }
  public set ErrorMessage(value: any) {
    this._ErrorMessage = value;
  }
}
