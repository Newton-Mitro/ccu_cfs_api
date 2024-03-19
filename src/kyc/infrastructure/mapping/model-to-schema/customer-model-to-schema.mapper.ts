import { Types } from 'mongoose';
import { ISchemaMapper } from 'src/config/database/mongoose/schema.mapper';
import { AddressEntity } from 'src/kyc/domain/models/common/address.entity';
import { CustomerModel } from 'src/kyc/domain/models/common/customer.model';
import { Customer } from '../../schema/common/customer.schema';

export class CustomerModelToSchemaMapper
  implements ISchemaMapper<Customer, CustomerModel>
{
  mapBusinessModelToSchema(model: CustomerModel): Customer {
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
    customerSchema.CreatedAt = model.CreatedAt;
    customerSchema.UpdatedAt = model.UpdatedAt;
    customerSchema.CreatedBy = model.CreatedBy;
    customerSchema.UpdatedBy = model.UpdatedBy;
    return customerSchema;
  }
}
