"use strict";
function getRange(a, b, c = 1) {
    let result = [];
    for (a; a <= b; a += c) {
      result.push(a);
    }
    return result;
  }
  console.log(getRange(10, 40, 5));