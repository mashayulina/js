"use strict";
function recursion(x, sum) {
    if (x > 0) {
          sum += x % 10;
          x = Math.floor(x / 10);
      console.log(x, sum);
      return recursion(x, sum);
      } else {
          return sum;
    }
  }
  
  const test = recursion(10891, 0);
  
  console.log(test);
