const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('None arguments');
    }
    if (message.length != key.length) {
      const repeatCount = Math.ceil(message.length / key.length);
      let sliceLength = key.repeat(repeatCount).length - message.length;
      const repeatKey = key.repeat(repeatCount).slice(0, -sliceLength);

      const messageCharCode = message
        .toUpperCase()
        .split('')
        .map((el) => el.charCodeAt());

      const keyCharCode = repeatKey
        .toUpperCase()
        .split('')
        .map((el) => el.charCodeAt());

      let j = 0;
      const resArr = messageCharCode.map((el) => {
        if (el > 64 && el < 91) {
          let key = String.fromCharCode(((el + keyCharCode[j]) % 26) + 65);
          j++;
          return key;
        }
        return String.fromCharCode(el);
      });
      return this.type ? resArr.join('') : resArr.reverse().join('');
    }
    const messageCharCode = message
      .toUpperCase()
      .split('')
      .map((el) => el.charCodeAt());

    const keyCharCode = key
      .toUpperCase()
      .split('')
      .map((el) => el.charCodeAt());

    let j = 0;
    const resArr = messageCharCode.map((el) => {
      if (el > 64 && el < 91) {
        let key = String.fromCharCode(((el + keyCharCode[j]) % 26) + 65);
        j++;
        return key;
      }
      return String.fromCharCode(el);
    });
    return this.type ? resArr.join('') : resArr.reverse().join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('None arguments');
    }
    if (message.length != key.length) {
      const repeatCount = Math.ceil(message.length / key.length);
      const sliceLength = key.repeat(repeatCount).length - message.length;
      const repeatKey = key.repeat(repeatCount).slice(0, -sliceLength);

      const messageCharCode = message.split('').map((el) => el.charCodeAt());
      const keyCharCode = repeatKey
        .toUpperCase()
        .split('')
        .map((el) => el.charCodeAt());

      let j = 0;
      const resArr = messageCharCode.map((el) => {
        if (el > 64 && el < 91) {
          let key = String.fromCharCode(((el + 26 - keyCharCode[j]) % 26) + 65);
          j++;
          return key;
        }
        return String.fromCharCode(el);
      });
      return this.type ? resArr.join('') : resArr.reverse().join('');
    }
    const messageCharCode = message.split('').map((el) => el.charCodeAt());
    const keyCharCode = key
      .toUpperCase()
      .split('')
      .map((el) => el.charCodeAt());

    let j = 0;
    const resArr = messageCharCode.map((el) => {
      if (el > 64 && el < 91) {
        let key = String.fromCharCode(((el + 26 - keyCharCode[j]) % 26) + 65);
        j++;
        return key;
      }
      return String.fromCharCode(el);
    });
    return this.type ? resArr.join('') : resArr.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
