import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class Exam extends Evaluation {
  constructor(
    score: number,
    teacher: Teacher
  ) {
    if (score < 0) {
      throw new Error('The score cannot be negative.')
    } else if (score > 25) {
      throw new Error('The score cannot exceed 25 points.');
    }
    super(score, teacher);
  }
}
