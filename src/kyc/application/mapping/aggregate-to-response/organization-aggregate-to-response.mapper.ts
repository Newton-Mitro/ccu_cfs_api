import { OrganizationAggregate } from 'src/kyc/domain/models/organization/organization.aggregate';
import { AddressDTO } from '../../contract/common/dto/address.dto';
import { BankAccountDTO } from '../../contract/organization/responses/dto/bank-account.dto';
import { BranchDTO } from '../../contract/organization/responses/dto/branch.dto';
import { ContactPersonDTO } from '../../contract/organization/responses/dto/contact-person.dto';
import { OrganizationAttachmentDTO } from '../../contract/organization/responses/dto/organization-attachment.dto';
import { OrganizationResponse } from '../../contract/organization/responses/organization.response';

export class OrganizationAggregateToResponseMapper {
  static map(model: OrganizationAggregate): OrganizationResponse {
    // [x]: Implement Mapping

    const organization = new OrganizationResponse(
      model.organizationId,
      model.identificationNumber,
      model.registrationNumber,
      model.nameEn,
      model.nameBn,
      model.tin,
      model.contactNumber,
      model.mobileNumber,
      model.phoneNumber,
      model.fax,
      model.email,
      model.website,
      model.logo,
      model.createdAt?.toISOString(),
      model.updatedAt?.toISOString(),
      model.createdBy,
      model.updatedBy,
    );

    organization.branches = model.branches.map((branch) => {
      return new BranchDTO(
        branch.branchId,
        branch.organizationId,
        branch.identificationNumber,
        branch.registrationNumber,
        branch.nameEn,
        branch.nameBn,
        branch.tin,
        branch.contactNumber,
        branch.mobileNumber,
        branch.phoneNumber,
        branch.fax,
        branch.email,
        branch.website,
        branch.logo,
        branch.createdAt?.toISOString(),
        branch.updatedAt?.toISOString(),
        branch.createdBy,
        branch.updatedBy,
      );
    });

    organization.addresses = model.addresses.map((address) => {
      return new AddressDTO(
        address.addressId,
        address.addressType,
        address.addressLineOne,
        address.addressLineTwo,
        address.country,
        address.state,
        address.city,
        address.division,
        address.district,
        address.subDistrict,
        address.zipCode,
        address.createdAt?.toISOString(),
        address.updatedAt?.toISOString(),
        address.createdBy,
        address.updatedBy,
      );
    });

    organization.contact_peoples = model.contactPeoples.map((contactPerson) => {
      return new ContactPersonDTO(
        contactPerson.contactPersonId,
        contactPerson.personId,
        contactPerson.identificationNumber,
        contactPerson.nameEn,
        contactPerson.nameBn,
        contactPerson.contactNumber,
        contactPerson.mobileNumber,
        contactPerson.phoneNumber,
        contactPerson.email,
        contactPerson.dateOfBirth?.toISOString(),
        contactPerson.gender,
        contactPerson.bloodGroup,
        contactPerson.religion,
        contactPerson.maritalStatus,
        contactPerson.profession,
        contactPerson.nid,
        contactPerson.birthRegistrationNumber,
        contactPerson.photo,
        contactPerson.createdAt?.toISOString(),
        contactPerson.updatedAt?.toISOString(),
        contactPerson.createdBy,
        contactPerson.updatedBy,
      );
    });

    organization.bank_accounts = model.bankAccounts.map((bankAccount) => {
      return new BankAccountDTO(
        bankAccount.bankAccountId,
        bankAccount.bankName,
        bankAccount.branch,
        bankAccount.routingNumber,
        bankAccount.accountNumber,
        bankAccount.accountName,
        bankAccount.createdAt?.toISOString(),
        bankAccount.updatedAt?.toISOString(),
        bankAccount.createdBy,
        bankAccount.updatedBy,
      );
    });

    organization.attachments = model.attachments.map((attachment) => {
      return new OrganizationAttachmentDTO(
        attachment.attachmentId,
        attachment.documentTitle,
        attachment.fileUrl,
        attachment.createdAt?.toISOString(),
        attachment.updatedAt?.toISOString(),
        attachment.createdBy,
        attachment.updatedBy,
      );
    });

    return organization;
  }
}
