export class TrainingModel {
  private _CourseTitle: string;
  public get CourseTitle(): string {
    return this._CourseTitle;
  }
  public set CourseTitle(value: string) {
    this._CourseTitle = value;
  }
  private _InstituteName: string;
  public get InstituteName(): string {
    return this._InstituteName;
  }
  public set InstituteName(value: string) {
    this._InstituteName = value;
  }
  private _CourseContent: string;
  public get CourseContent(): string {
    return this._CourseContent;
  }
  public set CourseContent(value: string) {
    this._CourseContent = value;
  }
  private _Result: string;
  public get Result(): string {
    return this._Result;
  }
  public set Result(value: string) {
    this._Result = value;
  }
  private _StartDate: string;
  public get StartDate(): string {
    return this._StartDate;
  }
  public set StartDate(value: string) {
    this._StartDate = value;
  }
  private _EndDate: string;
  public get EndDate(): string {
    return this._EndDate;
  }
  public set EndDate(value: string) {
    this._EndDate = value;
  }
}
