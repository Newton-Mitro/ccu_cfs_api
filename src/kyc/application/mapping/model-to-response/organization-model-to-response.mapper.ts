import { OrganizationModel } from 'src/kyc/domain/models/organization/organization.aggregate';
import { OrganizationResponse } from '../../contract/organization/responses/organization.response';

export class OrganizationModelToResponseMapper {
  static map(model: OrganizationModel): OrganizationResponse {
    // TODO: Implement Mapping
    return new OrganizationResponse();
  }
}
