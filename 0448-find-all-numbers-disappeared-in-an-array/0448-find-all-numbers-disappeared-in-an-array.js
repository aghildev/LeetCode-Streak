/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let set = new Set(nums);
    let arr = []
    for(let i = 0;i<nums.length;i++){
        if(! set.has(i+1)){
            arr.push(i+1)
        }
    }
    return arr;
};