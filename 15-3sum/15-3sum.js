/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let targetSum = 0;
    let triplets = [];
    nums.sort((a,b)=>a-b)
    for(let i = 0;i<nums.length-2;i++){
        let left = i + 1;
        let right = nums.length - 1
        
        if(i >0 && nums[i]==nums[i-1]  ) continue;
        while (left < right){
          let  currentSum = nums[i]+nums[left]+nums[right]
            if(currentSum == targetSum){
                triplets.push([nums[i],nums[left],nums[right]])
                
                while(nums[left]==nums[left+1]) left++
                while(nums[right]==nums[right-1])right--
                left++
                right--
            }else if(currentSum < targetSum){
                     left++
            }else if(currentSum > targetSum){
                right--
            }
           
        }
    }
    return triplets
};