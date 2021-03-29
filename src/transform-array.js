const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let copyArr = [...arr];
  copyArr.map((_, i, arr) => {
    if (arr[i - 1] === '--discard-next') {
      arr[i] = '';
    } else if (arr[i + 1] === '--discard-prev') {
      arr[i] = '';
    } else if (arr[i] === '--double-next') {
      arr[i] = arr[i + 1];
    } else if (arr[i + 1] === '--double-prev') {
      arr[i + 1] = arr[i];
    }
  });
  return copyArr.filter((el) => typeof el != 'string' && el != undefined);
};
