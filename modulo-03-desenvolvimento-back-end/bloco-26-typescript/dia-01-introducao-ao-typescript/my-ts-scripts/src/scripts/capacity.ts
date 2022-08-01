import Capacity from "../enums/measures/Capacity";

function convert(value: number, from: Capacity, to: Capacity): number {
  return (from * value) / to;
}

console.log(convert(1.23, Capacity.dl, Capacity.ml));
