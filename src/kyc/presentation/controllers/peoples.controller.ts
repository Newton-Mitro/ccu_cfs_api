import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PeoplesService } from '../../application/services/peoples.service';
import { CreatePersonRequest } from '../contract/person/request/create-person.request';
import { UpdatePersonRequest } from '../contract/person/request/update-person.request';

@Controller('peoples')
export class PeoplesController {
  constructor(private readonly peoplesService: PeoplesService) {}

  @Post()
  create(@Body() createPersonRequest: CreatePersonRequest) {
    return this.peoplesService.create(createPersonRequest);
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
    @Body() updatePeopleRequest: UpdatePersonRequest,
  ) {
    return this.peoplesService.update(id, updatePeopleRequest);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peoplesService.remove(id);
  }
}
