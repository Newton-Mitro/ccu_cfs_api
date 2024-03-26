import { OrganizationAggregate } from 'src/kyc/domain/models/organization/organization.aggregate';
import { AddressDTO } from '../../contract/common/dto/address.dto';
import { BankAccountDTO } from '../../contract/organization/responses/dto/bank-account.dto';
import { BranchDTO } from '../../contract/organization/responses/dto/branch.dto';
import { ContactPersonDTO } from '../../contract/organization/responses/dto/contact-person.dto';
import { OrganizationAttachmentDTO } from '../../contract/organization/responses/dto/organization-attachment.dto';
import { OrganizationDTO } from '../../contract/organization/responses/dto/organization.dto';
import { OrganizationResponse } from '../../contract/organization/responses/organization.response';

export class OrganizationModelToResponseMapper {
  static map(model: OrganizationAggregate): OrganizationResponse {
    // TODO: Implement Mapping

    const organization = new OrganizationDTO(
      model.Organization.OrganizationId,
      model.Organization.IdentificationNumber,
      model.Organization.RegistrationNumber,
      model.Organization.NameEn,
      model.Organization.NameBn,
      model.Organization.TIN,
      model.Organization.ContactNumber,
      model.Organization.MobileNumber,
      model.Organization.PhoneNumber,
      model.Organization.Fax,
      model.Organization.Email,
      model.Organization.Website,
      model.Organization.Logo,
      model.Organization.CreatedAt.toISOString(),
      model.Organization.UpdatedAt.toISOString(),
      model.Organization.CreatedBy,
      model.Organization.UpdatedBy,
    );

    const branches = model.Branches.map((branch) => {
      return new BranchDTO(
        branch.BranchId,
        branch.OrganizationId,
        branch.IdentificationNumber,
        branch.RegistrationNumber,
        branch.NameEn,
        branch.NameBn,
        branch.TIN,
        branch.ContactNumber,
        branch.MobileNumber,
        branch.PhoneNumber,
        branch.Fax,
        branch.Email,
        branch.Website,
        branch.Logo,
        branch.CreatedAt.toISOString(),
        branch.UpdatedAt.toISOString(),
        branch.CreatedBy,
        branch.UpdatedBy,
      );
    });

    const addresses = model.Addresses.map((address) => {
      return new AddressDTO(
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
        address.CreatedAt.toISOString(),
        address.UpdatedAt.toISOString(),
        address.CreatedBy,
        address.UpdatedBy,
      );
    });

    const contactPeoples = model.ContactPeoples.map((contactPerson) => {
      return new ContactPersonDTO(
        contactPerson.ContactPersonId,
        contactPerson.PersonId,
        contactPerson.IdentificationNumber,
        contactPerson.NameEn,
        contactPerson.NameBn,
        contactPerson.ContactNumber,
        contactPerson.MobileNumber,
        contactPerson.PhoneNumber,
        contactPerson.Email,
        contactPerson.CustomerType,
        contactPerson.DateOfBirth,
        contactPerson.Gender,
        contactPerson.BloodGroup,
        contactPerson.Religion,
        contactPerson.MaritalStatus,
        contactPerson.Profession,
        contactPerson.NID,
        contactPerson.BirthRegistrationNumber,
        contactPerson.Photo,
        contactPerson.CreatedAt.toISOString(),
        contactPerson.UpdatedAt.toISOString(),
        contactPerson.CreatedBy,
        contactPerson.UpdatedBy,
      );
    });

    const bankAccounts = model.BankAccounts.map((bankAccount) => {
      return new BankAccountDTO(
        bankAccount.BankAccountId,
        bankAccount.BankName,
        bankAccount.Branch,
        bankAccount.RoutingNumber,
        bankAccount.AccountNumber,
        bankAccount.AccountName,
        bankAccount.CreatedAt.toISOString(),
        bankAccount.UpdatedAt.toISOString(),
        bankAccount.CreatedBy,
        bankAccount.UpdatedBy,
      );
    });

    const attachments = model.Attachments.map((attachment) => {
      return new OrganizationAttachmentDTO(
        attachment.AttachmentId,
        attachment.DocumentTitle,
        attachment.FileUrl,
        attachment.CreatedAt.toISOString(),
        attachment.UpdatedAt.toISOString(),
        attachment.CreatedBy,
        attachment.UpdatedBy,
      );
    });

    return new OrganizationResponse(
      organization,
      branches,
      addresses,
      contactPeoples,
      bankAccounts,
      attachments,
    );
  }
}
