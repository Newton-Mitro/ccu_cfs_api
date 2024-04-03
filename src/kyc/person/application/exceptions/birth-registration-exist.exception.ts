import { HttpException, HttpStatus } from '@nestjs/common';

export class BirthRegistrationExistException extends HttpException {
  constructor() {
    super(
      'There is a person that already registered with this birth registration number.',
      HttpStatus.NOT_ACCEPTABLE,
    );
  }
}
