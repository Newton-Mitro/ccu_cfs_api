import { AggregateRoot } from '@nestjs/cqrs';
import { IdentifiableEntitySchema } from '../../infrastructure/schemas/identifiable-entity.schema';

export interface IAggregateModelMapper<
  TSchema extends IdentifiableEntitySchema,
  TModel extends AggregateRoot,
> {
  mapSchemaToAggregate(entitySchema: TSchema): TModel;
}
