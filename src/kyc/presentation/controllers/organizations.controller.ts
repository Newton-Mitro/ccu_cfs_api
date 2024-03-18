import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OrganizationsService } from '../../application/services/organizations.service';
import { CreateOrganizationRequest } from '../contract/organization/request/create-organization.request';
import { UpdateOrganizationRequest } from '../contract/organization/request/update-organization.request';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Post()
  create(@Body() createOrganizationRequest: CreateOrganizationRequest) {
    return this.organizationsService.create(createOrganizationRequest);
  }

  @Get()
  findAll() {
    return this.organizationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrganizationRequest: UpdateOrganizationRequest,
  ) {
    return this.organizationsService.update(id, updateOrganizationRequest);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationsService.remove(id);
  }
}
