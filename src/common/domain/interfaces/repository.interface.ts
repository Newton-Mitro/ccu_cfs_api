import { AggregateRoot } from '@nestjs/cqrs';
import { IdentifiableEntitySchema } from '../../infrastructure/schemas/identifiable-entity.schema';

export interface IRepository<
  TSchema extends IdentifiableEntitySchema,
  TEntity extends AggregateRoot,
> {
  findById(id: string | number): Promise<TEntity>;

  find(): Promise<TEntity[]>;

  create(entity: TEntity): Promise<void>;

  findByIdAndReplace(id: string | number, entity: TEntity): Promise<void>;

  remove(id: string | number): Promise<void>;
}
