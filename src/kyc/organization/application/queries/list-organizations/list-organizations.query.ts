import { SortBy } from '../../../../../common/enums/sort-by.enum';

export class ListOrganizationsQuery {
  constructor(
    public readonly page: number,
    public readonly limit: number,
    public readonly order_by?: string,
    public readonly sort_by?: SortBy,
  ) {}
}
