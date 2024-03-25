import { PersonModel } from 'src/kyc/domain/models/person/person.aggregate';
import { PersonResponse } from '../../contract/person/responses/person.response';

export class PersonModelToResponseMapper {
  static map(model: PersonModel): PersonResponse {
    // TODO: Implement Mapping
    return new PersonResponse();
  }
}
