import { Types } from 'mongoose';
import { ModelSchemaFactory } from 'src/config/database/mongoose/entity-schema.factory';
import { AddressEntity } from 'src/kyc/domain/models/common/address.entity';
import { CustomerModel } from 'src/kyc/domain/models/common/customer.model';
import { Address } from '../schema/common/address.schema';
import { Customer } from '../schema/common/customer.schema';

export class CustomerFactory
  implements ModelSchemaFactory<Customer, CustomerModel>
{
  create(model: CustomerModel): Customer {
    const customerSchema = new Customer();
    customerSchema.IdentificationNumber = model.IdentificationNumber;
    customerSchema.NameEn = model.NameEn;
    customerSchema.NameBn = model.NameBn;
    customerSchema.ContactNumber = model.ContactNumber;
    customerSchema.PhoneNumber = model.PhoneNumber;
    customerSchema.MobileNumber = model.MobileNumber;
    customerSchema.Email = model.Email;
    customerSchema.Addresses = model.Addresses?.map(
      (address: AddressEntity) => ({
        _id: new Types.ObjectId(address.AddressId),
        AddressType: address.AddressType,
        AddressLineOne: address.AddressLineOne,
        AddressLineTwo: address.AddressLineTwo,
        Country: address.Country,
        State: address.State,
        City: address.City,
        Division: address.Division,
        District: address.District,
        SubDistrict: address.SubDistrict,
        ZipCode: address.ZipCode,
      }),
    );
    return customerSchema;
  }
  createFromSchema(entitySchema: Customer): CustomerModel {
    const customerModel = new CustomerModel();
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
