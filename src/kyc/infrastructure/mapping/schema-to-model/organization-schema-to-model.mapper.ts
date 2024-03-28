import { IBusinessModelMapper } from 'src/common/database/mongoose/business-model.mapper';
import { OrganizationAggregate } from 'src/kyc/domain/models/organization/organization.aggregate';
import { Address } from '../../schema/common/address.schema';
import { Organization } from '../../schema/organization/organization.schema';

export class OrganizationSchemaModelMapper
  implements IBusinessModelMapper<Organization, OrganizationAggregate>
{
  mapSchemaToBusinessModel(entitySchema: Organization): OrganizationAggregate {
    const organizationModel = new OrganizationAggregate();

    entitySchema.addresses?.map((address: Address) => {
      organizationModel.addAddress({
        ...address,
        addressId: address._id.toHexString(),
      });
    });

    return organizationModel;
  }
}
