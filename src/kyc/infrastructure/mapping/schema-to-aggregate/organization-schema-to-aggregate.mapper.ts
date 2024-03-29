import { IBusinessModelMapper } from 'src/common/database/mongoose/business-model.mapper';
import { OrganizationAggregate } from '../../../domain/models/organization/organization.aggregate';
import { Address } from '../../schema/common/address.schema';
import { Organization } from '../../schema/organization/organization.schema';

export class OrganizationSchemaToAggregateMapper
  implements IBusinessModelMapper<Organization, OrganizationAggregate>
{
  mapSchemaToAggregate(entitySchema: Organization): OrganizationAggregate {
    const organizationModel = new OrganizationAggregate({
      organizationId: entitySchema._id.toHexString(),
      identificationNumber: entitySchema.identificationNumber,
      registrationNumber: entitySchema.registrationNumber,
      tin: entitySchema.tin,
      nameEn: entitySchema.nameEn,
      nameBn: entitySchema.nameBn,
      email: entitySchema.email,
      contactNumber: entitySchema.contactNumber,
      mobileNumber: entitySchema.mobileNumber,
      phoneNumber: entitySchema.phoneNumber,
      fax: entitySchema.fax,
      website: entitySchema.website,
      logo: entitySchema.logo,
      createdAt: entitySchema.createdAt,
      updatedAt: entitySchema.updatedAt,
      createdBy: entitySchema.createdBy,
      updatedBy: entitySchema.updatedBy,
    });

    entitySchema.addresses?.map((address: Address) => {
      organizationModel.addAddress({
        ...address,
        addressId: address._id.toHexString(),
      });
    });

    return organizationModel;
  }
}
