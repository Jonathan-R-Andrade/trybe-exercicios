import Area from "../enums/measures/Area";

function convert(value: number, from: Area, to: Area): number {
  return (from * value) / to;
}

console.log(convert(1.23, Area.dam2, Area.m2));
