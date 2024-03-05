import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class FileLoggingService extends Logger {
  error(message: any, stack?: string, context?: string) {
    // add your tailored logic here
    super.error(message, stack, context);
  }
}
