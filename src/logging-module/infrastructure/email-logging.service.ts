import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class EmailLoggingService extends Logger {
  error(message: any, stack?: string, context?: string) {
    // add your tailored logic here
    super.error(message, stack, context);
  }
}
