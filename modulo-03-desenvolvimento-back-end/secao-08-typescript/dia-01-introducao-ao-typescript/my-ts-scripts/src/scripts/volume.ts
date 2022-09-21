import Volume from "../enums/measures/Volume";
import exec from "../utils/exec";

function convert(value: number, from: Volume, to: Volume): number {
  return (from * value) / to;
}

exec(Volume, convert);
