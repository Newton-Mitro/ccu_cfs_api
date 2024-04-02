import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreatePersonRequest } from 'src/kyc/application/contract/person/requests/create-person.request';
import { UpdatePersonRequest } from 'src/kyc/application/contract/person/requests/update-person.request';
import { PeoplesService } from '../../application/services/peoples.service';

@Controller('peoples')
export class PeoplesController {
  constructor(private readonly peoplesService: PeoplesService) {}

  @Post()
  create(
    @Req() req: Request,
    @Body() createPersonRequest: CreatePersonRequest,
  ) {
    const user: any = req['user'];
    return this.peoplesService.create(
      user?.id,
      new Date(),
      new Date(),
      createPersonRequest,
    );
  }

  @Get()
  findAll() {
    return this.peoplesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peoplesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Req() req: Request,
    @Body() updatePeopleRequest: UpdatePersonRequest,
  ) {
    const user: any = req['user'];
    return this.peoplesService.update(
      user?.id,
      new Date(),
      id,
      updatePeopleRequest,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peoplesService.remove(id);
  }
}
