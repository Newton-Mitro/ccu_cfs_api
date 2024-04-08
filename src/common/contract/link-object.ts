export enum HttpMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export class LinkObject {
  constructor(
    private readonly label: string,
    private readonly url: string,
    private readonly method: HttpMethod,
    private readonly rel?: string,
    private readonly icon?: string,
  ) {}
}
