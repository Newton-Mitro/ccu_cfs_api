export class AddEducationCommand {
  constructor(
    public readonly educationLevel: string,
    public readonly educationDegree: string,
    public readonly instituteName: string,
    public readonly majorSubject: string,
    public readonly passingYear: string,
    public readonly grade: string,
  ) {}
}
