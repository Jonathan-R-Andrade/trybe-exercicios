import Hemispheres from "../enums/Hemispheres";
import Months from "../enums/Months";
import Seasons from "../enums/Seasons";

const northern = {
  [Months.January]: [Seasons.Winter],
  [Months.February]: [Seasons.Winter],
  [Months.March]: [Seasons.Winter, Seasons.Spring],
  [Months.April]: [Seasons.Spring],
  [Months.May]: [Seasons.Spring],
  [Months.June]: [Seasons.Spring, Seasons.Summer],
  [Months.July]: [Seasons.Summer],
  [Months.August]: [Seasons.Summer],
  [Months.September]: [Seasons.Summer, Seasons.Autumn],
  [Months.October]: [Seasons.Autumn],
  [Months.November]: [Seasons.Autumn],
  [Months.December]: [Seasons.Autumn, Seasons.Winter],
};

const southern = {
  [Months.January]: [Seasons.Summer],
  [Months.February]: [Seasons.Summer],
  [Months.March]: [Seasons.Summer, Seasons.Autumn],
  [Months.April]: [Seasons.Autumn],
  [Months.May]: [Seasons.Autumn],
  [Months.June]: [Seasons.Autumn, Seasons.Winter],
  [Months.July]: [Seasons.Winter],
  [Months.August]: [Seasons.Winter],
  [Months.September]: [Seasons.Winter, Seasons.Spring],
  [Months.October]: [Seasons.Spring],
  [Months.November]: [Seasons.Spring],
  [Months.December]: [Seasons.Spring, Seasons.Summer],
};

function seasonsOfTheMonth(month: Months, hemisphere: Hemispheres): String[] {
  if (hemisphere === Hemispheres.Northern) {
    return northern[month].map(season => Seasons[season]);
  }
  return southern[month].map(season => Seasons[season]);
};

export default seasonsOfTheMonth;
