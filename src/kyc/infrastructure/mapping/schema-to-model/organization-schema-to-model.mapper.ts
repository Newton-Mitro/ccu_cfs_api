import { IBusinessModelMapper } from 'src/config/database/mongoose/business-model.mapper';
import { OrganizationAggregate } from 'src/kyc/domain/models/organization/organization.aggregate';
import { Address } from '../../schema/common/address.schema';
import { Organization } from '../../schema/organization/organization.schema';

export class OrganizationSchemaModelMapper
  implements IBusinessModelMapper<Organization, OrganizationAggregate>
{
  mapSchemaToBusinessModel(entitySchema: Organization): OrganizationAggregate {
    const organizationModel = new OrganizationAggregate();

    entitySchema.Addresses?.map((address: Address) => {
      organizationModel.addAddress(
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
        address.CreatedAt,
        address.UpdatedAt,
        address.CreatedBy,
        address.UpdatedBy,
      );
    });

    return organizationModel;
  }
}
