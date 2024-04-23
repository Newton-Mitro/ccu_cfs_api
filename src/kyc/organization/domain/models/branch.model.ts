import { AuthUserType } from '../../../../common/types/auth-user.type';
import { BranchProps } from '../types/branch-props';

export class BranchModel {
  readonly branchId: string;
  readonly organizationId: string;
  readonly identificationNumber: string;
  readonly registrationNumber: string;
  readonly tin: string;
  readonly nameEn: string;
  readonly nameBn: string;
  readonly email: string;
  readonly contactNumber: string;
  readonly mobileNumber: string;
  readonly phoneNumber: string;
  readonly fax: string;
  readonly website: string;
  readonly logo: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly createdBy: AuthUserType | null;
  readonly updatedBy: AuthUserType | null;

  constructor(branchProps: BranchProps) {
    this.branchId = branchProps.branchId;
    this.organizationId = branchProps.organizationId;
    this.identificationNumber = branchProps.identificationNumber;
    this.registrationNumber = branchProps.registrationNumber;
    this.tin = branchProps.tin;
    this.nameEn = branchProps.nameEn;
    this.nameBn = branchProps.nameBn;
    this.email = branchProps.email;
    this.contactNumber = branchProps.contactNumber;
    this.mobileNumber = branchProps.mobileNumber;
    this.phoneNumber = branchProps.phoneNumber;
    this.fax = branchProps.fax;
    this.website = branchProps.website;
    this.logo = branchProps.logo;
    this.createdAt = branchProps.createdAt;
    this.updatedAt = branchProps.updatedAt;
    this.createdBy = branchProps.createdBy;
    this.updatedBy = branchProps.updatedBy;
  }
}
