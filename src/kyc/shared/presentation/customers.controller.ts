import { Controller, Get, Param, Query } from '@nestjs/common';
import { FindAllQueryRequest } from '../../../common/application/contract/find-all-query.dto';
import { Permission } from '../../../identity/auth/enums/permissions.enum';
import { HasPermissions } from '../../../identity/auth/util/permissions.decorator';
import { CustomersService } from '../application/services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  @Get()
  @HasPermissions(Permission.ListCustomers)
  findAll(@Query() findAllQueryRequest: FindAllQueryRequest) {
    return this.customerService.findAll(findAllQueryRequest);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(id);
  }
}
