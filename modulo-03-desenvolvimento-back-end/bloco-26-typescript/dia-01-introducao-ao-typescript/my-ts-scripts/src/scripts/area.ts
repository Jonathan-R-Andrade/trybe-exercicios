import Area from "../enums/measures/Area";
import exec from "../utils/exec";

function convert(value: number, from: Area, to: Area): number {
  return (from * value) / to;
}

exec(Area, convert);
