/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

    
 var addStrings = function(num1, num2) {
 var num1Index = num1.length - 1;
    var num2Index = num2.length - 1;
    var carry  = 0;
    var ans = "";
    while(num1Index >= 0 && num2Index >= 0) {
        var num1Digit = Number(num1[num1Index]);
        var num2Digit = Number(num2[num2Index]);
        
        var sum = num1Digit + num2Digit + carry;
        
        if (sum >= 10) {
            carry = 1;
        }
         else {
            carry = 0;
        }
        
        ans = (sum%10) + ans;
        
        num1Index--;
        num2Index--;
    }
    
    while(num1Index >= 0) {
        var num1Digit = Number(num1[num1Index]);
        var sum = num1Digit + carry;
         
        if (sum >= 10) {
            carry = 1;
        }
        else {
            carry = 0;
        }
        
        ans = (sum%10) + ans;
        
        num1Index--;
    }
    
    while(num2Index >= 0) {
        var num2Digit = Number(num2[num2Index]);
        var sum = num2Digit + carry;
         
        if (sum >= 10) {
            carry = 1;
        }
        else {
            carry = 0;
        }
        
        ans = (sum%10) + ans;
        
        num2Index--;
    }
    
    if(carry){
        ans = carry + ans;
    }
    
    return ans;


};