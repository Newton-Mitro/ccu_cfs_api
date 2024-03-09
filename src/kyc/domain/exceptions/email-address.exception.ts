import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailAddressException extends HttpException {
  constructor() {
    super('Invalid email address.', HttpStatus.NOT_ACCEPTABLE);
  }
}
