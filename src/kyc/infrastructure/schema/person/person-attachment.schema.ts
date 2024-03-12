import { Prop, Schema } from '@nestjs/mongoose';
import { PersonalDocumentType } from 'src/kyc/domain/common/enums/kyc-attachment-type.enum';

@Schema()
export class PersonAttachmentSchema {
  @Prop({
    require: true,
    type: String,
    enum: Object.values(PersonalDocumentType),
  })
  DocumentTitle: PersonalDocumentType;

  @Prop({ required: true, type: String })
  DocumentUrl: string;
}
