import { HttpException, HttpStatus } from '@nestjs/common';

export class NIDExistException extends HttpException {
  constructor() {
    super(
      'There is a person that already registered with this national identification number.',
      HttpStatus.NOT_ACCEPTABLE,
    );
  }
}
