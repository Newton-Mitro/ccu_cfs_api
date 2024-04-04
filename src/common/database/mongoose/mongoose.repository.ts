import { NotFoundException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { FilterQuery, Model } from 'mongoose';
import { IAggregateModelMapper } from './aggregate-model.mapper';
import { IdentifiableEntitySchema } from './identifiable-entity.schema';
import { ISchemaMapper } from './schema.mapper';

export abstract class MongooseRepository<
  TSchema extends IdentifiableEntitySchema,
  TEntity extends AggregateRoot,
> {
  constructor(
    protected readonly entityModel: Model<TSchema>,
    protected readonly schemaMapper: ISchemaMapper<TSchema, TEntity>,
    protected readonly aggregateModelMapper: IAggregateModelMapper<
      TSchema,
      TEntity
    >,
  ) {}

  async findOne(entityFilterQuery?: FilterQuery<TSchema>): Promise<TEntity> {
    const entityDocument = await this.entityModel.findOne(
      entityFilterQuery,
      {},
      { lean: true },
    );

    if (!entityDocument) {
      throw new NotFoundException('Entity was not found.');
    }

    return this.aggregateModelMapper.mapSchemaToAggregate(entityDocument);
  }

  async find(entityFilterQuery?: FilterQuery<TSchema>): Promise<TEntity[]> {
    return (await this.entityModel.find({}, { lean: true })).map(
      (entityDocument) =>
        this.aggregateModelMapper.mapSchemaToAggregate(entityDocument),
    );
  }

  async create(entity: TEntity): Promise<void> {
    await new this.entityModel(
      this.schemaMapper.mapAggregateToSchema(entity),
    ).save();
  }

  async findOneAndReplace(
    entityFilterQuery: FilterQuery<TSchema>,
    entity: TEntity,
  ): Promise<void> {
    const updatedEntityDocument = await this.entityModel.findOneAndReplace(
      entityFilterQuery,
      this.schemaMapper.mapAggregateToSchema(entity),
      {
        new: true,
        useFindAndModify: false,
        lean: true,
      },
    );

    if (!updatedEntityDocument) {
      throw new NotFoundException('Unable to find the entity to replace.');
    }
  }

  async remove(entityFilterQuery?: FilterQuery<TSchema>): Promise<void> {
    const entity = await this.entityModel.findByIdAndDelete(entityFilterQuery);

    if (!entity) {
      throw new NotFoundException('Unable to find the entity to delete.');
    }
  }
}
