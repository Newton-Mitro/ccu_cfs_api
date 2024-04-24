import { Injectable, NotFoundException } from '@nestjs/common';
import { FindAllQueryRequest } from '../../../../common/application/contract/find-all-query.dto';
import { CustomerRepository } from '../../infrastructure/repositories/customer.repository';

@Injectable()
export class CustomersService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  // async search(searchText: string, findAllQueryDto: FindAllQueryDTO) {
  //   // {
  //   //   $and: [
  //   //     { $or: [{ nameEn: regex }, { description: regex }] },
  //   //     { category: value.category },
  //   //     { city: value.city },
  //   //   ],
  //   // }

  //   const { order_by, limit, page, sort_by } = findAllQueryDto;
  //   const regex = new RegExp(searchText, 'i');
  //   const customers = await this.customerRepository
  //     .find({
  //       $or: [
  //         { NameEn: regex },
  //         { IdentificationNumber: regex },
  //         { NID: regex },
  //         { BirthRegistrationNumber: regex },
  //       ],
  //     })
  //     .select([
  //       '_id',
  //       'IdentificationNumber',
  //       'NameEn',
  //       'NameBn',
  //       'Email',
  //       'ContactNumber',
  //       'DateOfBirth',
  //       'NID',
  //       'BirthRegistrationNumber',
  //       'BloodGroup',
  //       'Gender',
  //       'Religion',
  //       'Profession',
  //       'MaritalStatus',
  //       'Photo',
  //       'CustomerType',
  //     ])
  //     .sort({ [sort_by]: order_by })
  //     .limit(limit)
  //     .skip(limit * (page - 1));

  //   return customers;
  // }

  async findAll(findAllQueryRequest: FindAllQueryRequest) {
    return this.customerRepository.findAll(findAllQueryRequest);
  }

  async findOne(id: string) {
    const existingCustomer = await this.customerRepository.findById(id);
    if (!existingCustomer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return existingCustomer;
  }

  // async remove(id: string) {
  //   const deletedCustomer = await this.customerRepository.findByIdAndDelete(id);
  //   if (!deletedCustomer) {
  //     throw new NotFoundException(`Customer #${id} not found`);
  //   }
  //   return deletedCustomer;
  // }
}
