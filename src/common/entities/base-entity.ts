export abstract class BaseEntity {
  Id: string;
  CreatedAt: Date;
  UpdatedAt: Date;

  constructor(id: string) {
    this.Id = id;
    this.CreatedAt = new Date();
    this.UpdatedAt = new Date();
  }

  // Method to update the entity's 'updatedAt' property
  touch(): void {
    this.UpdatedAt = new Date();
  }
}
