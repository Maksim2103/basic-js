const CustomError = require('../extensions/custom-error');
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const value = +sampleActivity;
  const res = Math.ceil(
    Math.log(MODERN_ACTIVITY / value) / (0.693 / HALF_LIFE_PERIOD)
  );
  if (
    typeof sampleActivity !== 'string' ||
    isNaN(sampleActivity) ||
    sampleActivity === false ||
    sampleActivity === null ||
    sampleActivity === undefined ||
    value > 15 ||
    value < 0 ||
    sampleActivity === Infinity ||
    value === 0 ||
    !sampleActivity
  ) {
    return false;
  }
  return res;
};
