import { BaseEntity } from 'src/common/entities/base-entity';

export class PhotoAttachmentEntity extends BaseEntity {
  private _DocumentTitle: string;
  private _FileUrl: string;

  constructor(attachmentId: string, documentTitle: string, fileUrl: string) {
    super(attachmentId);
    this._DocumentTitle = documentTitle;
    this._FileUrl = fileUrl;
  }

  public get DocumentTitle(): string {
    return this._DocumentTitle;
  }

  public set DocumentTitle(value: string) {
    this._DocumentTitle = value;
  }

  public get FileUrl(): string {
    return this._FileUrl;
  }

  public set FileUrl(value: string) {
    this._FileUrl = value;
  }
}
