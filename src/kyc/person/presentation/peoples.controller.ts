import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreatePersonRequest } from '../application/contract/requests/create-person.request';
import { UpdatePersonRequest } from '../application/contract/requests/update-person.request';
import { PeoplesService } from '../application/services/peoples.service';

@Controller('peoples')
export class PeoplesController {
  constructor(private readonly peoplesService: PeoplesService) {}

  @Post()
  async create(
    @Req() req: Request,
    @Body() createPersonRequest: CreatePersonRequest,
    @Res() response: Response,
  ) {
    const user: any = req['user'];
    await this.peoplesService.create(
      user?.id,
      new Date(),
      new Date(),
      createPersonRequest,
    );

    return response
      .status(HttpStatus.OK)
      .json({ data: 'Person created successfully.' });
  }

  @Get()
  async findAll() {
    return await this.peoplesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.peoplesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Req() req: Request,
    @Body() updatePeopleRequest: UpdatePersonRequest,
    @Res() response: Response,
  ) {
    const user: any = req['user'];
    await this.peoplesService.update(
      user?.id,
      new Date(),
      id,
      updatePeopleRequest,
    );

    return response
      .status(HttpStatus.OK)
      .json({ data: 'Person updated successfully.' });
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response: Response) {
    await this.peoplesService.remove(id);

    return response
      .status(HttpStatus.OK)
      .json({ data: 'Person deleted successfully.' });
  }
}
