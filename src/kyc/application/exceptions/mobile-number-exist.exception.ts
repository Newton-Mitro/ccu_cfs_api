import { HttpException, HttpStatus } from '@nestjs/common';

export class MobileExistException extends HttpException {
  constructor() {
    super(
      'There is a person that already registered with this mobile number.',
      HttpStatus.NOT_ACCEPTABLE,
    );
  }
}
