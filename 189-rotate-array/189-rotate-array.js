/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  
    function reverse(nums,start,end){
    while(start<end){
        [nums[start],nums[end]] = [nums[end],nums[start]]
        start ++
        end --
    }
}
    k = k % nums.length;
    //full rotation
    reverse(nums,0,nums.length - 1)
    //first part
    reverse(nums,0,k-1)
    //second part 
    reverse(nums,k,nums.length - 1)
    
    return nums

};