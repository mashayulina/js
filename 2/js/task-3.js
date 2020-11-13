const month ='Май';
let season;
switch (month) {
    case 'Декабрь':
    case 'Январь':
    case 'Февраль':
    season  = 'Зима';
    break;

    case 'Март':
    case 'Апрель':
    case 'Май':
    season  = 'Весна';
    break;
    
    case 'Июнь':
    case 'Июль':
    case 'Август':
    season  = 'Лето';
    break;

    case 'Сентябрь':
    case 'Декабрь':
    case 'Октябрь':
    season  = 'Осень';
    break;
}
console.log(season);



