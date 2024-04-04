import { AggregateRoot } from '@nestjs/cqrs';
import { SortBy } from '../enums/sort-by.enum';
import { IdentifiableEntitySchema } from '../schemas/identifiable-entity.schema';

export interface IRepository<
  TSchema extends IdentifiableEntitySchema,
  TEntity extends AggregateRoot,
> {
  findById(id: string | number): Promise<TEntity>;

  find(
    page?: number,
    limit?: number,
    order_by?: string,
    sort_by?: SortBy,
  ): Promise<TEntity[]>;

  create(entity: TEntity): Promise<void>;

  findByIdAndReplace(id: string | number, entity: TEntity): Promise<void>;

  remove(id: string | number): Promise<void>;
}
