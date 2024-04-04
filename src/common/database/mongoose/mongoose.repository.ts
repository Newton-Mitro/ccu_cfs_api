import { NotFoundException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { Model, ObjectId } from 'mongoose';
import { SortBy } from '../../enums/sort-by.enum';
import { IRepository } from '../../interfaces/repository.interface';
import { IAggregateModelMapper } from '../../mapper/aggregate-model.mapper';
import { ISchemaMapper } from '../../mapper/schema.mapper';
import { IdentifiableEntitySchema } from '../../schemas/identifiable-entity.schema';

export abstract class MongooseRepository<
  TSchema extends IdentifiableEntitySchema,
  TEntity extends AggregateRoot,
> implements IRepository<TSchema, TEntity>
{
  constructor(
    protected readonly entityModel: Model<TSchema>,
    protected readonly schemaMapper: ISchemaMapper<TSchema, TEntity>,
    protected readonly aggregateModelMapper: IAggregateModelMapper<
      TSchema,
      TEntity
    >,
  ) {}

  async findById(id: string | ObjectId | number): Promise<TEntity> {
    const entityDocument = await this.entityModel.findById({ _id: id });

    if (!entityDocument) {
      throw new NotFoundException('Entity was not found.');
    }

    return this.aggregateModelMapper.mapSchemaToAggregate(entityDocument);
  }

  async find(
    page?: number,
    limit?: number,
    order_by?: string,
    sort_by?: SortBy,
  ): Promise<TEntity[]> {
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

  async findByIdAndReplace(
    id: string | ObjectId | number,
    entity: TEntity,
  ): Promise<void> {
    const updatedEntityDocument = await this.entityModel.findByIdAndUpdate(
      id,
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

  async remove(id: string | ObjectId | number): Promise<void> {
    const entity = await this.entityModel.findByIdAndDelete(id);

    if (!entity) {
      throw new NotFoundException('Unable to find the entity to delete.');
    }
  }
}
