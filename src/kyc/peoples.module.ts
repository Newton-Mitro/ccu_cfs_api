import { Module } from '@nestjs/common';
import { PeoplesService } from './application/peoples.service';
import { PeoplesController } from './presentation/peoples.controller';

@Module({
  controllers: [PeoplesController],
  providers: [PeoplesService],
})
export class PeoplesModule {}
