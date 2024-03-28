import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailExistException extends HttpException {
  constructor() {
    super(
      'There is a person that already registered with this email address.',
      HttpStatus.NOT_ACCEPTABLE,
    );
  }
}
