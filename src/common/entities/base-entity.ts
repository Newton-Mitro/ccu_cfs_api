export class BaseEntity {
  private _id: string;
  private _CreatedAt: Date;
  private _UpdatedAt: Date;

  constructor(
    id: string,
    // createdAt: Date = new Date(),
    // updatedAt: Date = new Date(),
  ) {
    this._id = id;
    // this._CreatedAt = createdAt;
    // this._UpdatedAt = updatedAt;
  }

  public get Id(): string {
    return this._id;
  }

  //   public get CreatedAt(): Date {
  //     return this._CreatedAt;
  //   }

  //   public get UpdatedAt(): Date {
  //     return this._UpdatedAt;
  //   }

  //   public set UpdatedAt(value: Date) {
  //     this._UpdatedAt = value;
  //   }
}
