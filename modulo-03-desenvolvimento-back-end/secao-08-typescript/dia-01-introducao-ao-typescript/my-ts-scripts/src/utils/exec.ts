import readlineSync from 'readline-sync';
import enumToArray from "../utils/enumToArray";

export default function exec(enumeration: any, conversionFunction: any) {
  const units: string[] = enumToArray(enumeration);

  const value = readlineSync.questionFloat('Informe um valor ');
  const fromIndex = readlineSync.keyInSelect(units, 'Escolha a unidade base: ');
  const toIndex = readlineSync.keyInSelect(units, 'Escolha a unidade para a conversão: ');

  const baseUnit = units[fromIndex];
  const unitForConversion = units[toIndex];

  const from = (enumeration)[baseUnit];
  const to = (enumeration)[unitForConversion];

  const result = conversionFunction(value, from, to);

  console.log(`\n${value}${baseUnit} é igual a ${result}${unitForConversion}.`);
}
