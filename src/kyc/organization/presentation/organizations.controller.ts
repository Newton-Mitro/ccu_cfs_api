import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOrganizationRequest } from '../application/contract/requests/create-organization.request';
import { UpdateOrganizationRequest } from '../application/contract/requests/update-organization.request';
import { OrganizationsService } from '../application/services/organizations.service';

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
