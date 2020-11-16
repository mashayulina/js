"use strict";
let x = 1;

for (let i = 10; x < 2**20; i++) {
    x*= 2;
    console.log(x);
}