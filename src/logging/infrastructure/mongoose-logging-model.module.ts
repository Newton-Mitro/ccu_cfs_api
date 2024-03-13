import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BASE_LOG_RECORD_MODEL,
  BaseLogRecordSchema,
} from './schemas/base-log-record.schema';
import {
  ERROR_LOG_RECORD_MODEL,
  ErrorLogRecordSchema,
} from './schemas/error-log-record.schema';
import {
  SUCCESS_LOG_RECORD_MODEL,
  SuccessLogRecordSchema,
} from './schemas/success-log-record.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BASE_LOG_RECORD_MODEL,
        schema: BaseLogRecordSchema,
        discriminators: [
          {
            name: SUCCESS_LOG_RECORD_MODEL,
            schema: SuccessLogRecordSchema,
          },
          {
            name: ERROR_LOG_RECORD_MODEL,
            schema: ErrorLogRecordSchema,
          },
        ],
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class MongooseLoggingModelsModule {}
