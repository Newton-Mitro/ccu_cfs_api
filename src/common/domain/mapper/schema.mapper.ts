import { AggregateRoot } from '@nestjs/cqrs';
import { IdentifiableEntitySchema } from '../../infrastructure/schemas/identifiable-entity.schema';

export interface ISchemaMapper<
  TSchema extends IdentifiableEntitySchema,
  TModel extends AggregateRoot,
> {
  mapAggregateToSchema(model: TModel): TSchema;
}
