/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
 const set = new Set(nums);    
    const newArr = [];
    
    for (let i = 0; i < nums.length; i += 1) {
		if(!set.has(i + 1)){
			newArr.push(i + 1);
		}
    }
    
    return newArr;
};