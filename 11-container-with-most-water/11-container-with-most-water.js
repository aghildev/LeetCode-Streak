/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
      let maxArea = 0
  let i = 0;
  let j = height.length - 1;
  while(i<j){
      let h = Math.min(height[i],height[j])
      let w = j - i
      let newArea = h * w
      maxArea = Math.max(maxArea,newArea)
      if(height[i]<height[j]){
          i++
      }else{
          j--
      }
  }
    return maxArea
};