import { IBusinessModelMapper } from 'src/config/database/mongoose/business-model.mapper';
import { AddressEntity } from 'src/kyc/domain/models/common/address.entity';
import { Address } from '../../schema/common/address.schema';
import { Customer } from '../../schema/common/customer.schema';
import { CustomerModel } from 'src/kyc/domain/models/common/customer.model';

export class CustomerBusinessModelMapper
  implements IBusinessModelMapper<Customer, CustomerModel>
{
  mapSchemaToBusinessModel(entitySchema: Customer): CustomerModel {
    const customerModel = new CustomerModel();
    customerModel.CustomerId = entitySchema._id.toHexString();
    customerModel.IdentificationNumber = entitySchema.IdentificationNumber;
    customerModel.NameEn = entitySchema.NameEn;
    customerModel.NameBn = entitySchema.NameBn;
    customerModel.ContactNumber = entitySchema.ContactNumber;
    customerModel.PhoneNumber = entitySchema.PhoneNumber;
    customerModel.MobileNumber = entitySchema.MobileNumber;
    customerModel.Email = entitySchema.Email;
    customerModel.Addresses = entitySchema.Addresses?.map(
      (address: Address) => {
        const addressModel = new AddressEntity(
          address._id.toHexString(),
          address.AddressType,
          address.AddressLineOne,
          address.AddressLineTwo,
          address.Country,
          address.State,
          address.City,
          address.Division,
          address.District,
          address.SubDistrict,
          address.ZipCode,
        );
        return addressModel;
      },
    );
    return customerModel;
  }
}
