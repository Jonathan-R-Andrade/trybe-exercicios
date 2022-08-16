import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class Work extends Evaluation {
  constructor(
    score: number,
    teacher: Teacher
  ) {
    if (score < 0) {
      throw new Error('The score cannot be negative.')
    } else if (score > 50) {
      throw new Error('The score cannot exceed 50 points.');
    }
    super(score, teacher);
  }
}
