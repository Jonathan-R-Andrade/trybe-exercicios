import Teacher from "./Teacher";

export default abstract class Evaluation {
  private _score: number = 0;

  constructor(
    score: number,
    public teacher: Teacher
  ) {
    this.score = score;
  }

  private _checkScore(score: number): void {
    if (score < 0) throw new Error('The score cannot be negative.');
  }

  public get score(): number {
    return this._score;
  }

  public set score(score: number) {
    this._checkScore(score);
    this._score = score;
  }
}
