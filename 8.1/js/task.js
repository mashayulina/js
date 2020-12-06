"use strict";
function getCats() {
    return [
        {
            "name": "Люся",
            "age": "1 год",
            "color": "трехцветная",
            "additional_info": {"vaccinations": true, "passport": true}
        },
        {
            "name": "Том",
            "age": "3 месяца",
            "color": "белый",
            "additional_info": {"vaccinations": false, "passport": false}
        },
        {
            "name": "Макс",
            "age": 2,
            "color": "серый",
            "additional_info": {"vaccinations": false, "passport": true}
        },
        {
            "name": "Василий",
            "age": 3,
            "color": "черный",
            "additional_info": {"vaccinations": true, "passport": true}
        }
    ];
}
function generateCatsCards(catsElem) {
    let cats = getCats();
    for (let i = 0; i < cats.length; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      let title = document.createElement("h2");
      title.classList.add("title");
      let name = document.createElement("span");
      name.innerText = cats[i].name.toUpperCase();
      let dash = document.createElement("span");
      dash.innerText = " | ";
      let catsAge = document.createElement("span");
      catsAge.innerText = `Возраст: ${cats[i].age}`;
      let aboutCat = document.createElement("div");
      aboutCat.classList.add("about");
      let imgDiv = document.createElement("div");
      imgDiv.classList.add("image");
      let img = document.createElement("img");
      img.setAttribute("src", "img/1" + ".jpg");
      let information = document.createElement("div");
      information.classList.add("info");
      let addInfo = document.createElement("h3");
      addInfo.innerText = "Дополнительная информация:";
      let catColor = document.createElement("p");
      catColor.innerText = `Цвет: ${cats[i].color}`;
      let catDocument = document.createElement("p");
      catDocument.innerText = `Документы: ${cats[i].additional_info.passport ? "Есть" : "Нет"}`;
      let catVacct = document.createElement("p");
      catVacct.innerText = `Прививки: ${cats[i].additional_info.vaccinations ? "Есть" : "Нет"}`;
      information.append(addInfo, catColor, catDocument, catVacct);
      imgDiv.append(img);
      aboutCat.append(imgDiv, information);
      title.append(name, dash, catsAge);
      card.append(title, aboutCat);
      catsElem.append(card);
    }
  }
  generateCatsCards(document.querySelector(".cats"));