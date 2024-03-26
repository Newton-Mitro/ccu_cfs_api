import { OrganizationModel } from './organization.model';

export class BranchModel extends OrganizationModel {
  private _BranchId: string;

  constructor(
    branchId: string,
    organizationId: string,
    identificationNumber: string,
    registrationNumber: string,
    tin: string,
    nameEn: string,
    nameBn: string,
    email: string,
    contactNumber: string,
    mobileNumber: string,
    phoneNumber: string,
    fax: string,
    website: string,
    logo: string,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    super(
      organizationId,
      identificationNumber,
      registrationNumber,
      tin,
      nameEn,
      nameBn,
      email,
      contactNumber,
      mobileNumber,
      phoneNumber,
      fax,
      website,
      logo,
      createdAt,
      updatedAt,
      createdBy,
      updatedBy,
    );
    this._BranchId = branchId;
  }

  public get BranchId(): string {
    return this._BranchId;
  }
}
