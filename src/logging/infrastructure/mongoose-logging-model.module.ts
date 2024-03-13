import { Global, Module } from '@nestjs/common';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import {
  BASE_LOG_RECORD_MODEL,
  BaseLogRecordSchema,
} from './schemas/base-log-record.schema';
import { ErrorLogRecordSchema } from './schemas/error-log-record.schema';
import { SuccessLogRecordSchema } from './schemas/success-log-record.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BASE_LOG_RECORD_MODEL,
        schema: SchemaFactory.createForClass(BaseLogRecordSchema),
        discriminators: [
          {
            name: 'SuccessLog',
            schema: SchemaFactory.createForClass(SuccessLogRecordSchema),
          },
          {
            name: 'ErrorLog',
            schema: SchemaFactory.createForClass(ErrorLogRecordSchema),
          },
        ],
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class MongooseLoggingModelsModule {}
