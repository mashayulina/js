"use strict";
let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

function generateTable(array) {
   let table = document.createElement("table");
   let row = table.insertRow();
   for (let elem in array[0]) {
       let th = document.createElement("th");
       th.innerText = elem;
       row.append(th);
   }
   for (let obj of array) {
       row = table.insertRow();
       for (let elem in obj) {
           let cell = row.insertCell();
           cell.innerText = obj[elem];
       }
   }
   return table;
}
let tableArea = document.querySelector(".tables-section");
tableArea.append(generateTable(articles));
tableArea.append(generateTable(goods));
