/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
   num = num.join("");
  let total = String(BigInt(num) + BigInt(k)).split("");
    return total
};