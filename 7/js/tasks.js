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
