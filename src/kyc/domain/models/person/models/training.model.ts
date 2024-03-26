export class TrainingModel {
  private _TrainingId: string;
  private _CourseTitle: string;
  private _InstituteName: string;
  private _CourseContent: string;
  private _Result: string;
  private _StartDate: Date;
  private _EndDate: Date;
  private _CreatedAt: Date;
  private _UpdatedAt: Date;
  private _CreatedBy: string;
  private _UpdatedBy: string;

  constructor(
    trainingId: string,
    courseTitle: string,
    instituteName: string,
    courseContent: string,
    result: string,
    startDate: Date,
    endDate: Date,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    this._TrainingId = trainingId;
    this._CourseTitle = courseTitle;
    this._InstituteName = instituteName;
    this._CourseContent = courseContent;
    this._Result = result;
    this._StartDate = startDate;
    this._EndDate = endDate;
    this._CreatedAt = createdAt;
    this._UpdatedAt = updatedAt;
    this._CreatedBy = createdBy;
    this._UpdatedBy = updatedBy;
  }

  public get TrainingId(): string {
    return this._TrainingId;
  }

  public get CourseTitle(): string {
    return this._CourseTitle;
  }

  public get InstituteName(): string {
    return this._InstituteName;
  }

  public get CourseContent(): string {
    return this._CourseContent;
  }

  public get Result(): string {
    return this._Result;
  }

  public get StartDate(): Date {
    return this._StartDate;
  }

  public get EndDate(): Date {
    return this._EndDate;
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
