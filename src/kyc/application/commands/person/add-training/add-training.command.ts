export class AddTrainingCommand {
  constructor(
    public readonly courseTitle: string,
    public readonly instituteName: string,
    public readonly courseContent: string,
    public readonly result: string,
    public readonly startDate: Date,
    public readonly endDate: Date,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly createdBy: string,
    public readonly updatedBy: string,
  ) {}
}
