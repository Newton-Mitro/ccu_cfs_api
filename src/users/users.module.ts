import { Module } from '@nestjs/common';
import { UsersService } from './application/users.service';
import { MongooseUserModelsModule } from './infrastructure/mongoose-user-model.module';

@Module({
  imports: [MongooseUserModelsModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
