const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 1;
    }
    let maxDepthCurrentArr = 1;
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        const checkDepthArr = this.calculateDepth(el) + 1;
        if (checkDepthArr > maxDepthCurrentArr) {
          maxDepthCurrentArr = checkDepthArr;
        }
      }
    });
    return maxDepthCurrentArr;
  }
};
