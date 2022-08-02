import Capacity from "../enums/measures/Capacity";
import exec from "../utils/exec";

function convert(value: number, from: Capacity, to: Capacity): number {
  return (from * value) / to;
}

exec(Capacity, convert);
