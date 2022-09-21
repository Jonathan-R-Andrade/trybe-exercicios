import Evaluation from "./Evaluation";

export default class EvaluationResult {
  private _score: number = 0;

  constructor(
    public evaluation: Evaluation,
    score: number,
  ) {
    this.score = score;
  }

  private _checkScore(score: number): void {
    if (score < 0) {
      throw new Error('The score cannot be negative.');
    } else if (score > this.evaluation.score) {
      throw new Error('The score cannot be higher than the evaluation score.');
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
