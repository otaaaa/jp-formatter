module.exports = (text) => {
  const clearText = text.replace(/[,\s万円]/g, '');
  const prefix = /億/.test(clearText) ? '' : '0億';
  const digits = (prefix + clearText).split('億');
  const numbers = digits.map((digit, index) => {
    const n = digits.length - index;
    return digit * Math.pow(10000, n);
  });
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0);
}
