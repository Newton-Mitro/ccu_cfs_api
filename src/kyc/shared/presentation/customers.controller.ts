import { Controller, Get, Param, Query } from '@nestjs/common';
import { Permission } from 'src/access-control/auth/enums/permissions.enum';
import { HasPermissions } from 'src/access-control/auth/util/permissions.decorator';
import { FindAllQueryRequest } from '../../../common/application/contract/find-all-query.dto';
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
