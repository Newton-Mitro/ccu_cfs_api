import { Controller, Get, Param, Query } from '@nestjs/common';
import { Permission } from 'src/auth/enums/permissions.enum';
import { HasPermissions } from 'src/auth/util/permissions.decorator';
import { FindAllQueryRequest } from '../../../common/contract/find-all-query.dto';
import { CustomersService } from '../../application/services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  // @Get('search/:search_text')
  // search(
  //   @Query() findAllQueryDto: FindAllQueryDTO,
  //   @Param('search_text') searchText: string,
  // ) {
  //   return this.customerService.search(searchText, findAllQueryDto);
  // }

  @Get()
  @HasPermissions(Permission.ListCustomers)
  findAll(@Query() findAllQueryRequest: FindAllQueryRequest) {
    return this.customerService.findAll(findAllQueryRequest);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(id);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.customerService.remove(id);
  // }
}
