import Length from "../enums/measures/Length";
import exec from "../utils/exec";

function convert(value: number, from: Length, to: Length): number {
  return (from * value) / to;
}

exec(Length, convert);
