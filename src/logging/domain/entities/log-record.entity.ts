import { AggregateRoot } from '@nestjs/cqrs';

export class LogRecordModel extends AggregateRoot {
  private _id: string;
  private _User: Object;
  private _UserAgent: string;
  private _ReceivedAt: string;
  private _IP: string;
  private _RequestMethod: string;
  private _Path: string;
  private _RequestQuery: Object;
  private _RequestBody: Object;
  private _StatusCode: number;

  constructor(
    id: string,
    user: Object,
    userAgent: string,
    receivedAt: string,
    ip: string,
    requestMethod: string,
    path: string,
    requestQuery: Object,
    requestBody: Object,
    statusCode: number,
  ) {
    super();
    this._id = id;
    this._User = user;
    this._UserAgent = userAgent;
    this._ReceivedAt = receivedAt;
    this._IP = ip;
    this._RequestMethod = requestMethod;
    this._Path = path;
    this._RequestQuery = requestQuery;
    this._RequestBody = requestBody;
    this._StatusCode = statusCode;
  }

  public get id(): string {
    return this._id;
  }

  public get User(): Object {
    return this._User;
  }
  public set User(value: Object) {
    this._User = value;
  }

  public get UserAgent(): string {
    return this._UserAgent;
  }
  public set UserAgent(value: string) {
    this._UserAgent = value;
  }

  public get ReceivedAt(): string {
    return this._ReceivedAt;
  }
  public set ReceivedAt(value: string) {
    this._ReceivedAt = value;
  }

  public get IP(): string {
    return this._IP;
  }
  public set IP(value: string) {
    this._IP = value;
  }

  public get RequestMethod(): string {
    return this._RequestMethod;
  }
  public set RequestMethod(value: string) {
    this._RequestMethod = value;
  }

  public get Path(): string {
    return this._Path;
  }
  public set Path(value: string) {
    this._Path = value;
  }

  public get RequestQuery(): Object {
    return this._RequestQuery;
  }
  public set RequestQuery(value: Object) {
    this._RequestQuery = value;
  }

  public get RequestBody(): Object {
    return this._RequestBody;
  }
  public set RequestBody(value: Object) {
    this._RequestBody = value;
  }

  public get StatusCode(): number {
    return this._StatusCode;
  }
  public set StatusCode(value: number) {
    this._StatusCode = value;
  }
}
