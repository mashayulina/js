"use strict";
// 3
const books = [
    { author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5},
    { author: 'Гоголь', title: 'Мертвые души', pageCount: 470},
    { author: 'Лермонтов', title: 'Тамань', pageCount: 190},
    { author: 'Гончаров', title: 'Обломов', pageCount: 610},
    { author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191},
    { author: 'Грибоедов', title: 'Горе от ума', pageCount: 470},
    { author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50},
    { author: 'Лермонтов', title: 'Бородино', pageCount: 2},
];
const filterBooks = (books, author) => books.filter(book => book.author === author);
console.log(filterBooks(books, 'Пушкин'));

//4
const sortBooks3 = (books) => books.sort((a, b) => a.pageCount === b.pageCount ? 0 : a.pageCount > b.pageCount ? 1 : -1)

console.log(sortBooks3(books));

//1

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};
function getPrice(from, to, obj){ 
    if (!Number.isInteger(from) && !Number.isInteger(to)) return;
    let newObj = {};
    for (let elem in obj) {
       if (obj[elem].price > from && obj[elem].price <= to) {
          newObj[elem] = obj[elem];
 
       }
    }
    return newObj;
 }
 console.log(getPrice(1000, 2500, goods))


//2
/*Функция принимает на вход: title, countToCart и obj:
     * title - название товара, который хочет купить пользователь;     * countToCart - кодичество товара, который хочет приобрести пользователь;
     * obj - объект.
     
 Необходимо найти товар с названием (title):
     если количество позволяет, то уменьшить количество товара в объекте obj на countToCart,
     вывести в консоль информацию, что данного товара достаточно на складе,
     если не позволяет, то вывести информацию об этом в консоль.    
 Если товар с названием (title) не был найден вывести сообщение об этом в консоль
 
 Функция ничего не возвращает.*/


function  getByTitle(title, countToCart, obj)
{
     for(let key in obj)
     {
         if(obj[key].title === title)
         {
            if((obj[key].count - countToCart) >= 0)
                return `Осталось на складе ${obj[key].count - countToCart} шт.`;
            elses
                return 'Превышено колличество';
         }
     }

     return 'Товар не найден';
}

 console.log(getByTitle('Флейта', 12, goods));
