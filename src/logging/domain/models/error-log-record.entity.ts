import { AuthUserType } from '../../../common/domain/types/auth-user.type';
import { LogRecordModel } from './log-record.entity';

export class ErrorLogRecordModel extends LogRecordModel {
  private _exceptionType: string;
  private _errorMessage: any;

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
    exceptionType: string,
    errorMessage: any,
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
    this._errorMessage = errorMessage;
    this._exceptionType = exceptionType;
  }

  public get exceptionType(): string {
    return this._exceptionType;
  }

  public get errorMessage(): any {
    return this._errorMessage;
  }
}
