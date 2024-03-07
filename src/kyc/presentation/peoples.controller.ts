import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PeoplesService } from '../application/peoples.service';
import { CreatePeopleDTO } from '../contract/create-people.dto';
import { UpdatePeopleDTO } from '../contract/update-people.dto';

@Controller('peoples')
export class PeoplesController {
  constructor(private readonly peoplesService: PeoplesService) {}

  @Post()
  create(@Body() createPeopleDto: CreatePeopleDTO) {
    return this.peoplesService.create(createPeopleDto);
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
  update(@Param('id') id: string, @Body() updatePeopleDto: UpdatePeopleDTO) {
    return this.peoplesService.update(id, updatePeopleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peoplesService.remove(id);
  }
}
