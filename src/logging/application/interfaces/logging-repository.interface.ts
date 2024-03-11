import { RequestResponseLogModel } from 'src/logging/domain/entities/request-response-log.entity';

export interface ILoggingRepository {
  createLog(requestResponseLogModel: RequestResponseLogModel);
}
