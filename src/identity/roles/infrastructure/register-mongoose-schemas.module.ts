import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Role.name',
        schema: 'RoleSchema',
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class RegisterMongooseSchemasModule {}
