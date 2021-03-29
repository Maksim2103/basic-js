const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const res = members.reduce((acc, el) => {
      if (typeof el !== 'string' || el === undefined || el === null) {
        return acc + '';
      }
      if (el.trim()[0] != undefined && el.trim()[0] != null) {
        let word = el.trim()[0].toUpperCase();
        return acc + word;
      }
      return acc;
    }, '');
    return res.split('').sort().join('');
  }
  return false;
};
