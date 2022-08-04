import Hemispheres from './enums/Hemispheres';
import Months from './enums/Months';
import seasonsOfTheMonth from './utils/seasonsOfTheMonth';
import { keyInSelect } from 'readline-sync';
import enumToArray from './utils/enumToArray';

const months: string[] = enumToArray(Months);
const hemispheres: string[] = enumToArray(Hemispheres);

const monthIndex: number = keyInSelect(months, 'Choose a month:');
const hemisphereIndex: number = keyInSelect(hemispheres, 'Choose a hemisphere:');

if (monthIndex >= 0 && hemisphereIndex >= 0) {
  const month = Months[monthIndex + 1];
  const hemisphere = Hemispheres[hemisphereIndex];
  const seasons = seasonsOfTheMonth(monthIndex + 1, hemisphereIndex).join(', ');
  console.log(`\nThe month of "${month}" in the hemisphere "${hemisphere}" has the season or seasons: "${seasons}"`);
};
