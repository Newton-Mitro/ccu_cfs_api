import { BaseEntity } from 'src/common/entities/base-entity';

export class TrainingEntity extends BaseEntity {
  private _CourseTitle: string;
  private _InstituteName: string;
  private _CourseContent: string;
  private _Result: string;
  private _StartDate: Date;
  private _EndDate: Date;

  constructor(
    trainingId: string,
    courseTitle: string,
    instituteName: string,
    courseContent: string,
    result: string,
    startDate: Date,
    endDate: Date,
  ) {
    super(trainingId);
    this._CourseTitle = courseTitle;
    this._InstituteName = instituteName;
    this._CourseContent = courseContent;
    this._Result = result;
    this._StartDate = startDate;
    this._EndDate = endDate;
  }

  public get CourseTitle(): string {
    return this._CourseTitle;
  }

  public set CourseTitle(value: string) {
    this._CourseTitle = value;
  }

  public get InstituteName(): string {
    return this._InstituteName;
  }

  public set InstituteName(value: string) {
    this._InstituteName = value;
  }

  public get CourseContent(): string {
    return this._CourseContent;
  }

  public set CourseContent(value: string) {
    this._CourseContent = value;
  }

  public get Result(): string {
    return this._Result;
  }

  public set Result(value: string) {
    this._Result = value;
  }

  public get StartDate(): Date {
    return this._StartDate;
  }

  public set StartDate(value: Date) {
    this._StartDate = value;
  }

  public get EndDate(): Date {
    return this._EndDate;
  }

  public set EndDate(value: Date) {
    this._EndDate = value;
  }
}
