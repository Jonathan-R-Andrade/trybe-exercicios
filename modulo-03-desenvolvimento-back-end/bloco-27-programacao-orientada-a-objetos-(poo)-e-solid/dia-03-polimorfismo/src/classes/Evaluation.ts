import Teacher from "./Teacher";

export type EvaluationType = 'prova' | 'trabalho';

export default class Evaluation {
  private _score: number = 0;

  constructor(
    score: number,
    public teacher: Teacher,
    public type: EvaluationType
  ) {
    this.score = score;
  }

  private _checkScore(score: number): void {
    if (score < 0) throw new Error('The score cannot be negative.');
    else if (this.type === 'prova' && score > 25) {
      throw new Error('The score cannot exceed 25 points.');
    }
    else if (this.type === 'trabalho' && score > 50) {
      throw new Error('The score cannot exceed 50 points.');
    }
  }

  public get score(): number {
    return this._score;
  }

  public set score(score: number) {
    this._checkScore(score);
    this._score = score;
  }
}
