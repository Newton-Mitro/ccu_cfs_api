export class EducationModel {
  private _EducationLevel: string;
  public get EducationLevel(): string {
    return this._EducationLevel;
  }
  public set EducationLevel(value: string) {
    this._EducationLevel = value;
  }
  private _EducationDegree: string;
  public get EducationDegree(): string {
    return this._EducationDegree;
  }
  public set EducationDegree(value: string) {
    this._EducationDegree = value;
  }
  private _InstituteName: string;
  public get InstituteName(): string {
    return this._InstituteName;
  }
  public set InstituteName(value: string) {
    this._InstituteName = value;
  }
  private _MajorSubject: string;
  public get MajorSubject(): string {
    return this._MajorSubject;
  }
  public set MajorSubject(value: string) {
    this._MajorSubject = value;
  }
  private _PassingYear: string;
  public get PassingYear(): string {
    return this._PassingYear;
  }
  public set PassingYear(value: string) {
    this._PassingYear = value;
  }
  private _Grade: string;
  public get Grade(): string {
    return this._Grade;
  }
  public set Grade(value: string) {
    this._Grade = value;
  }
}
