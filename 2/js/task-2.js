"use strict";
let lang="javascript";
let salary=1000000;
let result;
if ((lang==="javascript")&&(salary>100000)) {
    result="Приглашаем вас на собеседование";
}else if ((lang==="javascript")&&(salary<100000)) {
    result="Мы перезвоним вам в ближайшее время";
}
console.log(result);