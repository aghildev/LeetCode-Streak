/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let numsObj = {}
    let match;
    for(let i = 0;i<nums.length;i++){
        match = target - nums[i]
        
        if(match in numsObj){
            return [i,numsObj[match]]
        }else{
            numsObj[nums[i]] = i
        }
    }
    return []
};