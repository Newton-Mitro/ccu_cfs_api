import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class PersonAttachmentModel {
  private _AttachmentId: string;
  private _DocumentTitle: PersonalDocumentType;
  private _FileUrl: string;
  private _CreatedAt: Date;
  private _UpdatedAt: Date;
  private _CreatedBy: string;
  private _UpdatedBy: string;

  constructor(
    attachmentId: string,
    documentTitle: PersonalDocumentType,
    fileUrl: string,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    this._AttachmentId = attachmentId;
    this._DocumentTitle = documentTitle;
    this._FileUrl = fileUrl;
    this._CreatedAt = createdAt;
    this._UpdatedAt = updatedAt;
    this._CreatedBy = createdBy;
    this._UpdatedBy = updatedBy;
  }

  public get AttachmentId(): string {
    return this._AttachmentId;
  }

  public get DocumentTitle(): PersonalDocumentType {
    return this._DocumentTitle;
  }

  public set DocumentTitle(value: PersonalDocumentType) {
    this._DocumentTitle = value;
  }

  public get FileUrl(): string {
    return this._FileUrl;
  }

  public set FileUrl(value: string) {
    this._FileUrl = value;
  }

  public get CreatedAt(): Date {
    return this._CreatedAt;
  }

  public get UpdatedAt(): Date {
    return this._UpdatedAt;
  }

  public get CreatedBy(): string {
    return this._CreatedBy;
  }

  public get UpdatedBy(): string {
    return this._UpdatedBy;
  }
}
