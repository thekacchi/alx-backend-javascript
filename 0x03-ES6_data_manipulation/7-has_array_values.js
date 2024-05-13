/* eslint-disable array-callback-return */
function hasValuesFromArray(set, array) {
  return array.every(item => set.has(item));
}

export default hasValuesFromArray;
