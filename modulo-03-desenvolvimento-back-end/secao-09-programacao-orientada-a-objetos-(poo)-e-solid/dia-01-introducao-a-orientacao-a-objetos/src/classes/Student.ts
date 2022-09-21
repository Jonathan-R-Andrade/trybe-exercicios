export default class Student {
  constructor(
    public name: string,
    public enrollment: string,
    public testsGrades: number[],
    public worksGrades: number[],
  ) { }

  public sumGrades(): number {
    const exams = this.testsGrades.reduce((acc, grade) => acc + grade);
    const works = this.worksGrades.reduce((acc, grade) => acc + grade);
    return exams + works;
  }

  public averageGrade(): number {
    return this.sumGrades() / (this.testsGrades.length + this.worksGrades.length);
  }
}
