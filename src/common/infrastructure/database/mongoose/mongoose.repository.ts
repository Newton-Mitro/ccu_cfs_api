import { NotFoundException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { Model, Types } from 'mongoose';
import { IRepository } from '../../../domain/interfaces/repository.interface';
import { IAggregateModelMapper } from '../../../domain/mapper/aggregate-model.mapper';
import { ISchemaMapper } from '../../../domain/mapper/schema.mapper';
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

  async findById(id: string | number): Promise<TEntity> {
    const entityDocument = await this.entityModel.findById(
      new Types.ObjectId(id),
    );

    if (!entityDocument) {
      throw new NotFoundException('Entity was not found.');
    }

    return this.aggregateModelMapper.mapSchemaToAggregate(entityDocument);
  }

  async find(): Promise<TEntity[]> {
    return (await this.entityModel.find()).map((entityDocument) =>
      this.aggregateModelMapper.mapSchemaToAggregate(entityDocument),
    );
  }

  async create(entity: TEntity): Promise<void> {
    await new this.entityModel(
      this.schemaMapper.mapAggregateToSchema(entity),
    ).save();
  }

  async findByIdAndReplace(
    id: string | number,
    entity: TEntity,
  ): Promise<void> {
    const updatedEntityDocument = await this.entityModel.findByIdAndUpdate(
      new Types.ObjectId(id),
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

  async remove(id: string | number): Promise<void> {
    const entity = await this.entityModel.findByIdAndDelete(
      new Types.ObjectId(id),
    );

    if (!entity) {
      throw new NotFoundException('Unable to find the entity to delete.');
    }
  }
}
