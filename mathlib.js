module.exports = function (){
    return {
      add: function(num1, num2) { 
           var ans = num1 + num2 
           return ans; 
      },
      multiply: function(num1, num2) {
           var ans = num1 * num2; 
           return ans;  
      },
      square: function(num) {
           var ans = num * num; 
           return ans;  
      },
      random: function(num1, num2) {
           var ans = Math.floor(Math.random() * 35) + 1; 
           return ans; 
      }
    }
  };
  