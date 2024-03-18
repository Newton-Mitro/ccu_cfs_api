import { NotFoundException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { FilterQuery, Model } from 'mongoose';
import { IBusinessModelMapper } from './business-model.mapper';
import { IdentifiableEntitySchema } from './identifiable-entity.schema';
import { ISchemaMapper } from './schema.mapper';

export abstract class EntityRepository<
  TSchema extends IdentifiableEntitySchema,
  TEntity extends AggregateRoot,
> {
  constructor(
    protected readonly entityModel: Model<TSchema>,
    protected readonly schemaMapper: ISchemaMapper<TSchema, TEntity>,
    protected readonly businessModelMapper: IBusinessModelMapper<
      TSchema,
      TEntity
    >,
  ) {}

  protected async findOne(
    entityFilterQuery?: FilterQuery<TSchema>,
  ): Promise<TEntity> {
    const entityDocument = await this.entityModel.findOne(
      entityFilterQuery,
      {},
      { lean: true },
    );

    if (!entityDocument) {
      throw new NotFoundException('Entity was not found.');
    }

    return this.businessModelMapper.mapSchemaToBusinessModel(entityDocument);
  }

  protected async find(
    entityFilterQuery?: FilterQuery<TSchema>,
  ): Promise<TEntity[]> {
    return (await this.entityModel.find({}, { lean: true })).map(
      (entityDocument) =>
        this.businessModelMapper.mapSchemaToBusinessModel(entityDocument),
    );
  }

  async create(entity: TEntity): Promise<void> {
    await new this.entityModel(
      this.schemaMapper.mapBusinessModelToSchema(entity),
    ).save();
  }

  // protected async findOneAndReplace(
  //   entityFilterQuery: FilterQuery<TSchema>,
  //   entity: TEntity,
  // ): Promise<void> {
  //   const updatedEntityDocument = await this.entityModel.findOneAndReplace(
  //     entityFilterQuery,
  //     this.entitySchemaFactory.create(entity) as unknown as _AllowStringsForIds<
  //       LeanDocument<TSchema>
  //     >,
  //     {
  //       new: true,
  //       useFindAndModify: false,
  //       lean: true,
  //     },
  //   );

  //   if (!updatedEntityDocument) {
  //     throw new NotFoundException('Unable to find the entity to replace.');
  //   }
  // }
}
