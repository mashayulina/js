"use strict";
function flatter(input) {
    const filtered = input.map(item => {
        return item.filter(number => number > 0)
                    .map(number => number * 10)
    });

    return [].concat.apply([], filtered);
}

const example = [
     [3, 5, -1, 6, 0],
     [56, -9, 111, 6],
     [11, 86, -12],
 ];

console.log(flatter(example));
