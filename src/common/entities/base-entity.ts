export abstract class BaseEntity {
  protected _Id: string;

  constructor(id: string) {
    this._Id = id;
  }

  public get Id(): string {
    return this._Id;
  }
}
