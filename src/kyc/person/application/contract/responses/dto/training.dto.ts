export class TrainingDTO {
  constructor(
    readonly training_id: string,
    readonly course_title: string,
    readonly institute_name: string,
    readonly course_content: string,
    readonly result: string,
    readonly start_date: Date,
    readonly end_date: Date,
    readonly created_at: string,
    readonly updated_at: string,
    readonly created_by: string,
    readonly updated_by: string,
  ) {}
}
