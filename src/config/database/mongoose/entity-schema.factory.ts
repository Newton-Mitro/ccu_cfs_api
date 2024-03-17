import { AggregateRoot } from '@nestjs/cqrs';
import { IdentifiableEntitySchema } from './identifiable-entity.schema';

export interface ModelSchemaFactory<
  TSchema extends IdentifiableEntitySchema,
  TModel extends AggregateRoot,
> {
  create(model: TModel): TSchema;
  createFromSchema(entitySchema: TSchema): TModel;
}
