import Mass from "../enums/measures/Mass";
import exec from "../utils/exec";

function convert(value: number, from: Mass, to: Mass): number {
  return (from * value) / to;
}

exec(Mass, convert);
