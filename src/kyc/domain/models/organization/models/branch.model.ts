import { OrganizationModel, OrganizationProps } from './organization.model';

export type BranchProps = OrganizationProps & { branchId: string };

export class BranchModel extends OrganizationModel {
  readonly branchId: string;

  constructor(branchProps: BranchProps) {
    super(branchProps);
    this.branchId = branchProps.branchId;
  }
}
