"use strict";
let str = "в предложении все слова разной длины";
let longestWord = (str) => str.split(' ').reduce((a,b)=> (a.length > b.length) ? a : b);

console.log(longestWord("в предложении все слова разной длины"));