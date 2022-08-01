import Mass from "../enums/measures/Mass";

function convert(value: number, from: Mass, to: Mass): number {
  return (from * value) / to;
}

console.log(convert(1.23, Mass.kg, Mass.dag));
