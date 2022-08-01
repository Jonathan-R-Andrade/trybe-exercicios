import Length from "../enums/measures/Length";

function convert(value: number, from: Length, to: Length): number {
  return (from * value) / to;
}

console.log(convert(1.23, Length.m, Length.cm));
