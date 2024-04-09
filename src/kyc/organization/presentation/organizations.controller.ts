import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { FindAllQueryRequest } from '../../../common/contract/find-all-query.dto';
import { CreateOrganizationRequest } from '../application/contract/requests/create-organization.request';
import { UpdateOrganizationRequest } from '../application/contract/requests/update-organization.request';
import { OrganizationsService } from '../application/services/organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  create(
    @Req() req: Request,
    @Res() response: Response,
    @Body() createOrganizationRequest: CreateOrganizationRequest,
  ) {
    const user: any = req['user'];
    return this.organizationsService.create(
      user?.id,
      new Date(),
      new Date(),
      createOrganizationRequest,
    );
  }

  @Get()
  findAll(
    @Query() findAll: FindAllQueryRequest,
    @Res() response: Response,
    @Req() req: Request,
  ) {
    return this.organizationsService.findAll(findAll);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Res() response: Response,
    @Req() req: Request,
  ) {
    return this.organizationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Req() req: Request,
    @Res() response: Response,
    @Body() updateOrganizationRequest: UpdateOrganizationRequest,
  ) {
    const user: any = req['user'];
    return this.organizationsService.update(
      user?.id,
      new Date(),
      id,
      updateOrganizationRequest,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() response: Response) {
    return this.organizationsService.remove(id);
  }
}
