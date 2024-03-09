import { HttpException, HttpStatus } from '@nestjs/common';

export class NIDorBRNException extends HttpException {
  constructor() {
    super('NID or BRN needed.', HttpStatus.NOT_ACCEPTABLE);
  }
}
