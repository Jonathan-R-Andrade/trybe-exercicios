import Volume from "../enums/measures/Volume";

function convert(value: number, from: Volume, to: Volume): number {
  return (from * value) / to;
}

console.log(convert(1.234, Volume.m3, Volume.dm3));
