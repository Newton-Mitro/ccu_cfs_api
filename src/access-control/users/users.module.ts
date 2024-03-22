import { Module } from '@nestjs/common';
import { UsersService } from './application/users.service';
import { RegisterMongooseSchemasModule } from './infrastructure/register-mongoose-schemas.module';
import { UsersController } from './presentation/users.controller';

@Module({
  controllers: [UsersController],
  imports: [RegisterMongooseSchemasModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
