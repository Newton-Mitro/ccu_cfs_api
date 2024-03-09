import { HttpException, HttpStatus } from '@nestjs/common';

export class DateOfBirthException extends HttpException {
  constructor() {
    super('Invalid date of birth.', HttpStatus.NOT_ACCEPTABLE);
  }
}
