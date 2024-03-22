import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePersonRequest } from 'src/kyc/application/contract/person/requests/create-person.request';
import { UpdatePersonRequest } from 'src/kyc/application/contract/person/requests/update-person.request';
import { PeoplesService } from '../../application/services/peoples.service';

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
