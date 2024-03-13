import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/common/mongoose/identifiable-entity.schema';

@Schema({
  collection: 'StorageFiles',
})
export class StorageFile extends IdentifiableEntitySchema {
  @Prop()
  readonly DocumentTitle: string;

  @Prop()
  readonly FileURL: string;
}

export const StorageFileSchema = SchemaFactory.createForClass(StorageFile);

export type StorageFileDocument = StorageFile & Document;
export const STORAGE_FILE_MODEL = StorageFile.name;
