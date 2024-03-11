import { BaseEntity } from 'src/common/entities/base-entity';

export class EducationModel extends BaseEntity {
  private _EducationLevel: string;
  private _EducationDegree: string;
  private _InstituteName: string;
  private _MajorSubject: string;
  private _PassingYear: string;
  private _Grade: string;

  constructor(
    educationId: string,
    educationLevel: string,
    educationDegree: string,
    instituteName: string,
    majorSubject: string,
    passingYear: string,
    grade: string,
  ) {
    super(educationId);
    this._EducationLevel = educationLevel;
    this._EducationDegree = educationDegree;
    this._InstituteName = instituteName;
    this._MajorSubject = majorSubject;
    this._PassingYear = passingYear;
    this._Grade = grade;
  }

  public get EducationLevel(): string {
    return this._EducationLevel;
  }

  public set EducationLevel(value: string) {
    this._EducationLevel = value;
  }

  public get EducationDegree(): string {
    return this._EducationDegree;
  }

  public set EducationDegree(value: string) {
    this._EducationDegree = value;
  }

  public get InstituteName(): string {
    return this._InstituteName;
  }

  public set InstituteName(value: string) {
    this._InstituteName = value;
  }

  public get MajorSubject(): string {
    return this._MajorSubject;
  }

  public set MajorSubject(value: string) {
    this._MajorSubject = value;
  }

  public get PassingYear(): string {
    return this._PassingYear;
  }

  public set PassingYear(value: string) {
    this._PassingYear = value;
  }

  public get Grade(): string {
    return this._Grade;
  }

  public set Grade(value: string) {
    this._Grade = value;
  }
}
