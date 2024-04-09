import { IAggregateModelMapper } from '../../../../common/mapper/aggregate-model.mapper';
import { Address } from '../../../shared/infrastructure/schema/address.schema';
import { OrganizationAggregate } from '../../domain/models/organization.aggregate';
import { Organization } from '../schema/organization.schema';

export class OrganizationSchemaToAggregateMapper
  implements IAggregateModelMapper<Organization, OrganizationAggregate>
{
  mapSchemaToAggregate(entitySchema: Organization): OrganizationAggregate {
    const addresses = entitySchema.addresses?.map((address: Address) => {
      return {
        ...address,
        addressId: address._id.toHexString(),
      };
    });

    const organizationModel = new OrganizationAggregate();
    organizationModel.organizationInit({
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

    return organizationModel;
  }
}
