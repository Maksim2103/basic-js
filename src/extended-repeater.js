const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  if (options.addition == undefined && str != null) {
    const lengthSeparators = separator.length;
    const string = `${str}${separator}`;
    const repeatString = string.repeat(repeatTimes);
    const resString = repeatString.slice(0, -lengthSeparators);

    return resString;
  }
  const addition = String(options.addition);
  const addionString = `${addition}${additionSeparator}`;
  const addionRepeatString = addionString.repeat(additionRepeatTimes);
  const addionLengthSeparators = additionSeparator.length;
  const resAddionalString = addionRepeatString.slice(
    0,
    -addionLengthSeparators
  );

  const string = `${str}${resAddionalString}${separator}`;
  const lengthSeparators = separator.length;
  const repeatString = string.repeat(repeatTimes);
  const resString = repeatString.slice(0, -lengthSeparators);

  return resString;
};
