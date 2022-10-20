/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let newNumsArr = [...nums,...nums]
    return newNumsArr;
};