import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/common/database/mongoose/identifiable-entity.schema';

@Schema()
export class PhotoAttachment extends IdentifiableEntitySchema {
  @Prop({
    require: true,
    type: String,
  })
  DocumentTitle: string;

  @Prop({ required: true, type: String })
  FileUrl: string;
}

export const PhotoAttachmentSchema =
  SchemaFactory.createForClass(PhotoAttachment);
