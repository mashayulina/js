"use strict"; // не знаю верно ли это все, но работает :(
function pluralizer(value) {
    if (value % 10 === 1 && value % 100 !== 11) 
{ // понять что у нас единица товара или 21 или 31 товар и тд КРОМЕ 11
        return value + ' товар';
    } else if (value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20)) {
		// этой проверкой мы понимаем что у нас в конце 2 3 4, кроме 12 13 14
        return value + ' товара';
    } else {
        return value + ' товаров';
    }
}

console.log(pluralizer(0));
console.log(pluralizer(1));
console.log(pluralizer(2));
console.log(pluralizer(3));
console.log(pluralizer(4));
console.log(pluralizer(5));
console.log(pluralizer(6));
console.log(pluralizer(7));
console.log(pluralizer(8));
console.log(pluralizer(9));
console.log(pluralizer(10));
console.log(pluralizer(11));
console.log(pluralizer(12));
console.log(pluralizer(13));
console.log(pluralizer(14));
console.log(pluralizer(15));
console.log(pluralizer(16));
console.log(pluralizer(17));
console.log(pluralizer(18));
console.log(pluralizer(19));
console.log(pluralizer(20));
console.log(pluralizer(21));
console.log(pluralizer(2162));