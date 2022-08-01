export default function enumToArray(enumeration: object): string[] {
  const values = Object.values(enumeration) as string[];
  const totalValues = values.length;
  const halfOfTheValues = totalValues / 2;
  return values.slice(0, halfOfTheValues);
}
