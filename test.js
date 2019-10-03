/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  return parseInt(
    n
      .toString(2)
      .split('')
      .reverse()
      .join('')
      .padEnd(32, 0),
    2
  );
};

console.log(reverseBits(parseInt('11111111111111111111111111111101', 2)));
