import { Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class StorageDocument {}

export type StorageDocumentDocument = StorageDocument & Document;
export const STORAGE_DOCUMENT_MODEL = StorageDocument.name;

export const StorageDocumentSchema =
  SchemaFactory.createForClass(StorageDocument);
