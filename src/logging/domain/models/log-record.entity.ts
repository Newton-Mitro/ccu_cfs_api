import { AggregateRoot } from '@nestjs/cqrs';

export class LogRecordModel extends AggregateRoot {
  private _id: string;
  private _user: any;
  private _userAgent: string;
  private _receivedAt: string;
  private _ip: string;
  private _method: string;
  private _path: string;
  private _query: any;
  private _params: any;
  private _body: any;
  private _statusCode: number;

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
  ) {
    super();
    this._id = id;
    this._user = user;
    this._userAgent = userAgent;
    this._receivedAt = receivedAt;
    this._ip = ip;
    this._method = method;
    this._path = path;
    this._query = query;
    this._params = params;
    this._body = body;
    this._statusCode = statusCode;
  }

  public get id(): string {
    return this._id;
  }

  public get user(): any {
    return this._user;
  }

  public get userAgent(): string {
    return this._userAgent;
  }

  public get receivedAt(): string {
    return this._receivedAt;
  }

  public get ip(): string {
    return this._ip;
  }

  public get method(): string {
    return this._method;
  }

  public get path(): string {
    return this._path;
  }

  public get query(): any {
    return this._query;
  }

  public get params(): any {
    return this._params;
  }

  public get body(): any {
    return this._body;
  }

  public get statusCode(): number {
    return this._statusCode;
  }
}
