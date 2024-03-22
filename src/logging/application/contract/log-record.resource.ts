export class LogRecordResponse {
  User: Object;
  UserAgent: string;
  RequestedSent: any;
  RequestedReceived: string;
  IP: string;
  RequestMethod: string;
  Path: string;
  RequestQuery: Object;
  RequestBody: Object;
  ExceptionType: string;
  ResponseTime: number;
  StatusCode: number;
  ErrorMessage: any;
}
