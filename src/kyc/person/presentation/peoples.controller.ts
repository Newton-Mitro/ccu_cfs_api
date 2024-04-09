import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { FindAllQueryRequest } from '../../../common/contract/find-all-query.dto';
import { HttpMethod, LinkObject } from '../../../common/contract/link-object';
import { CreatePersonRequest } from '../application/contract/requests/create-person.request';
import { UpdatePersonRequest } from '../application/contract/requests/update-person.request';
import { PersonDTO } from '../application/contract/responses/dto/person.dto';
import { PeoplesService } from '../application/services/peoples.service';

@Controller('peoples')
export class PeoplesController {
  constructor(private readonly peoplesService: PeoplesService) {}

  @Post()
  async create(
    @Req() req: Request,
    @Res() response: Response,
    @Body() createPersonRequest: CreatePersonRequest,
  ) {
    const user: any = req['user'];
    await this.peoplesService.create(
      user?.id,
      new Date(),
      new Date(),
      createPersonRequest,
    );

    return response
      .status(HttpStatus.CREATED)
      .json({ data: 'Person created successfully.' });
  }

  @Get()
  async findAll(
    @Query() findAll: FindAllQueryRequest,
    @Res() response: Response,
    @Req() req: Request,
  ) {
    const peoples = await this.peoplesService.findAll(findAll);

    console.log(req.headers.host);

    return response.status(HttpStatus.OK).json({
      data: peoples.map((person: PersonDTO) => {
        return {
          ...person,
          links: [
            new LinkObject(
              'View',
              `http://${req.headers.host}/peoples/${person.person_id}`,
              HttpMethod.GET,
            ),
            new LinkObject(
              'Update',
              `http://${req.headers.host}/peoples/${person.person_id}`,
              HttpMethod.PATCH,
            ),
            new LinkObject(
              'Delete',
              `http://${req.headers.host}/peoples/${person.person_id}`,
              HttpMethod.DELETE,
            ),
          ],
        };
      }),
      paginate: [
        new LinkObject('First', '', HttpMethod.GET),
        new LinkObject('Last', '', HttpMethod.GET),
        new LinkObject('Next', '', HttpMethod.GET),
        new LinkObject('Previous', '', HttpMethod.GET),
      ],
    });
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
    @Res() response: Response,
    @Req() req: Request,
  ) {
    const person: PersonDTO = await this.peoplesService.findById(id);
    return response.status(HttpStatus.OK).json({
      data: {
        ...person,
        links: [
          new LinkObject(
            'View',
            `http://${req.headers.host}/peoples/${person.person_id}`,
            HttpMethod.GET,
          ),
        ],
      },
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() response: Response,
    @Body() updatePeopleRequest: UpdatePersonRequest,
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
