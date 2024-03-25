import { PersonModel } from 'src/kyc/domain/models/person/person.aggregate';
import { Address } from '../../contract/common/responses/address';
import { PersonResponse } from '../../contract/person/responses/person.response';

export class PersonModelToResponseMapper {
  static map(model: PersonModel): PersonResponse {
    // TODO: Implement Mapping
    const personResponseModel = new PersonResponse(
      model.PersonId,
      model.IdentificationNumber,
      model.NameEn,
      model.NameBn,
      model.DateOfBirth,
      model.Gender,
      model.BloodGroup,
      model.Religion,
      model.NID,
      model.BirthRegistrationNumber,
      model.MaritalStatus,
      model.ContactNumber,
      model.MobileNumber,
      model.PhoneNumber,
      model.Email,
      model.Profession,
      model.Photo.FileUrl,
    );
    personResponseModel.addresses = model.Addresses?.map((address) => {
      return new Address(
        address.AddressId,
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
    });

    return personResponseModel;
  }
}
