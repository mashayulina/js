"use strict";
let sum=10;
let result;
if (sum<999) {
    result="Скидка не предусмотрена";
}
else if (1000<=sum) {
    if(sum<=1999){
        result="Скидка 5%";
    }else if(sum<=2999){
        result="Скидка 10%";
    }else {
        result="Скидка 10% + подарок";
    }
}
console.log(result);



