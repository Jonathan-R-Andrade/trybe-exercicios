export default function myFilter<T>(
  array: T[],
  filter: (value: T, index?: number, array?: T[]) => boolean
): T[] {
  const filteredArray: T[] = [];

  for (let i = 0; i < array.length; i += 1) {
    const value = array[i];
    const passedTheFilter = filter(value, i, array);
    if (passedTheFilter) filteredArray.push(value);
  }

  return filteredArray;
}
