const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  const cat = '^^';
  return matrix.flat().reduce((acc, el) => {
    if (el == cat) {
      acc++;
    }
    return acc;
  }, 0);
};
