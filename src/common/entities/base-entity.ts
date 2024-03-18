export abstract class BaseEntity {
  protected _Id: string;
  protected _CreatedAt: Date;
  protected _UpdatedAt: Date;

  constructor(id: string) {
    this._Id = id;
    this._CreatedAt = new Date();
    this._UpdatedAt = new Date();
  }

  // Method to update the entity's 'updatedAt' property
  touch(): void {
    this._UpdatedAt = new Date();
  }

  public get Id(): string {
    return this._Id;
  }

  public get CreatedAt(): Date {
    return this._CreatedAt;
  }

  public get UpdatedAt(): Date {
    return this._UpdatedAt;
  }
}
