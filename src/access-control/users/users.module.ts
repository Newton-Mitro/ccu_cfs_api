import { Module } from '@nestjs/common';
import { UsersService } from './application/users.service';
import { MongooseUserModelsModule } from './infrastructure/mongoose-user-model.module';
import { UsersController } from './presentation/users.controller';

@Module({
  controllers: [UsersController],
  imports: [MongooseUserModelsModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
