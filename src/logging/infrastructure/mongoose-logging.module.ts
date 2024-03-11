import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  REQUEST_RESPONSE_LOG_MODEL,
  RequestResponseLogSchema,
} from './schemas/request-response-log.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: REQUEST_RESPONSE_LOG_MODEL,
        schema: RequestResponseLogSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class MongooseLoggingModelsModule {}
