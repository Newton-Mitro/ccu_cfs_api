import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { FindAllQueryDTO } from '../../../common/contract/find-all-query.dto';
import { CustomersService } from '../../application/services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  @Get('search/:search_text')
  search(
    @Query() findAllQueryDto: FindAllQueryDTO,
    @Param('search_text') searchText: string,
  ) {
    return this.customerService.search(searchText, findAllQueryDto);
  }

  @Get()
  findAll(@Query() findAllQueryDto: FindAllQueryDTO) {
    return this.customerService.findAll(findAllQueryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(id);
  }
}
