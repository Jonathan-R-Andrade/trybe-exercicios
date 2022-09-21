export default function enumToArray(enumeration: object): string[] {
  let keys = Object.keys(enumeration);
  keys = keys.filter((key) => isNaN(Number(key)));
  return keys;
}
