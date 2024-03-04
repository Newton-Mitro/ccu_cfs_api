import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private config: ConfigService) {}

  createMongooseOptions():
    | MongooseModuleOptions
    | Promise<MongooseModuleOptions> {
    const username = this.config.get('DATABASE_USER');
    const password = this.config.get('DATABASE_PASSWORD');
    const host = this.config.get('DATABASE_HOST');
    const port = this.config.get('DATABASE_PORT');
    const db = this.config.get('DATABASE_NAME');
    const isLocal = this.config.get('NODE_ENV') === 'HOME';

    const uri = isLocal
      ? `mongodb://localhost:${port}/${db}?authSource=admin&ssl=false`
      : `mongodb://${username}:${encodeURIComponent(
          password,
        )}@${host}:${port}/${db}?authSource=admin&ssl=false`;

    return {
      uri,
    };
  }
}
