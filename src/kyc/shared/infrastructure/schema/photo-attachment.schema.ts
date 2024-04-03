import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/common/database/mongoose/identifiable-entity.schema';

@Schema()
export class PhotoAttachment extends IdentifiableEntitySchema {
  @Prop({
    require: true,
    type: String,
  })
  documentTitle: string;

  @Prop({ required: true, type: String })
  fileUrl: string;
}

export const PhotoAttachmentSchema =
  SchemaFactory.createForClass(PhotoAttachment);
