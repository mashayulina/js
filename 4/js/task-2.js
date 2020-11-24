"use strict";
let str1 = "сел в озере березов лес";
let str2 = str1.split(' ').reverse().join('').toLowerCase();
let result = str2 === str2.split(' ').reverse().join('').toLowerCase() ? 'Пaлиндром' : 'Не пaлиндром';
console.log(result);