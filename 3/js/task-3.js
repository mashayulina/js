"use strict";
let plate=28;
let soup=10;
let i;
while(plate>0&&soup>0){
    plate-=1;
    soup-=0.5;
    i++;
    console.log(`Мыла осталось ${soup},Грязных тарелок осталось ${plate}`);
}