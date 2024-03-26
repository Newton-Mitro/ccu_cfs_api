export class EducationModel {
  private _EducationId: string;
  private _EducationLevel: string;
  private _EducationDegree: string;
  private _InstituteName: string;
  private _MajorSubject: string;
  private _PassingYear: string;
  private _Grade: string;
  private _CreatedAt: Date;
  private _UpdatedAt: Date;
  private _CreatedBy: string;
  private _UpdatedBy: string;

  constructor(
    educationId: string,
    educationLevel: string,
    educationDegree: string,
    instituteName: string,
    majorSubject: string,
    passingYear: string,
    grade: string,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    this._EducationId = educationId;
    this._EducationLevel = educationLevel;
    this._EducationDegree = educationDegree;
    this._InstituteName = instituteName;
    this._MajorSubject = majorSubject;
    this._PassingYear = passingYear;
    this._Grade = grade;
    this._CreatedAt = createdAt;
    this._UpdatedAt = updatedAt;
    this._CreatedBy = createdBy;
    this._UpdatedBy = updatedBy;
  }

  public get EducationId(): string {
    return this._EducationId;
  }

  public get EducationLevel(): string {
    return this._EducationLevel;
  }

  public get EducationDegree(): string {
    return this._EducationDegree;
  }

  public get InstituteName(): string {
    return this._InstituteName;
  }

  public get MajorSubject(): string {
    return this._MajorSubject;
  }

  public get PassingYear(): string {
    return this._PassingYear;
  }

  public get Grade(): string {
    return this._Grade;
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
