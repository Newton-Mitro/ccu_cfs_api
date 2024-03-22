import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/config/database/mongoose/identifiable-entity.schema';

@Schema()
export class StorageFile extends IdentifiableEntitySchema {
  @Prop()
  readonly DocumentTitle: string;

  @Prop()
  readonly FileURL: string;
}

export const StorageFileSchema = SchemaFactory.createForClass(StorageFile);
