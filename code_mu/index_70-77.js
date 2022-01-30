//  70. Многомерные массивы в JavaScript
// let arr = [
//   ["a", "b", "c"],
//   ["d", "e", "f"],
//   ["g", "h", "i"],
// ];

// console.log(arr[0][1]); // выведет 'b'
// console.log(arr[1][2]); // выведет 'f'

// 70.1
let arr2 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
];

// console.log(arr2[3][2]);
// console.log(arr2[1][1]);
// console.log(arr2[2][0]);
// console.log(arr2[0][0]);
// Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.

// 70.2 Обращаясь к каждому элементу массива найдите сумму всех его элементов.

let arr3 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// console.log(
//   arr3[0][0] + arr3[0][1] + arr3[1][0] + arr3[1][1] + arr3[2][0] + arr3[2][1]
// );

let arr4 = [
  [
    ["a", "b"],
    ["c", "d"],
  ],
  [
    ["e", "f"],
    ["g", "h"],
  ],
  [
    ["i", "j"],
    ["k", "l"],
  ],
];
// console.log(arr4[0][0][0]); // выведет 'a'
// console.log(arr4[2][1][0]); // выведет 'k'

// 70.3
// Обращаясь к каждому элементу массива найдите сумму всех его элементов.

let arr6 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

// console.log(
//   arr6[0][0][0] +
//     arr6[0][0][1] +
//     arr6[0][1][0] +
//     arr6[0][1][1] +
//     arr6[1][0][0] +
//     arr6[1][0][1] +
//     arr6[1][1][0] +
//     arr6[1][1][1]
// );

// 70.4
// Вручную, без цикла, найдите сумму элементов этого массива.

let arr7 = [
  [1, 2, 3, [4, 5, [6, 7]]],
  [8, [9, 10]],
];

// console.log(
//   arr7[0][0] +
//     arr7[0][1] +
//     arr7[0][2] +
//     arr7[0][3][0] +
//     arr7[0][3][1] +
//     arr7[0][3][2][0] +
//     arr7[0][3][2][1] +
//     arr7[1][0] +
//     arr7[1][1][0] +
//     arr7[1][1][1]
// );

// 71 Перебор многомерных массивов в JavaScript
let arr8 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8],
  [9, 10],
];

for (let subArr of arr8) {
  for (let elem of subArr) {
    // console.log(elem);
  }
}

// 71.1  С помощью вложенных циклов найдите сумму элементов этого массива.

let arr9 = [[1, 2, 3], [4, 5], [6]];

let sum = 0;
for (let subArr of arr9) {
  for (let elem of subArr) sum += elem;
}

// console.log(sum);

//71.2 Дан трехмерный массив с числами. С помощью вложенных циклов найдите сумму элементов этого массива.

let arr10 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

let sum1 = 0;

for (let twoArr of arr10) {
  for (let threeArr of twoArr) {
    for (let elem of threeArr) {
      sum1 += elem;
    }
  }
}

// console.log(sum1);

// Массивы также можно перебирать не через цикл for-of, а через обычный for:

let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8],
  [9, 10],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    // console.log(arr[i][j]);
  }
}

// 71.3
let sum2 = 0;
let arr11 = [[1, 2, 3], [4, 5], [6]];

for (let i = 0; i < arr10.length; i += 1) {
  for (let j = 0; j < arr[i].length; j += 1) {
    sum2 += arr[i][j];
  }
}

// console.log(sum2);

let arrow = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

let summa = 0;
for (let i = 0; i < arrow.length; i += 1) {
  for (let j = 0; j < arrow[i].length; j += 1) {
    for (let k = 0; k < arrow[i][j].length; k += 1) {
      summa += arrow[i][j][k];
      // console.log(summa);
    }
  }
}

// console.log(summa);

//  72 Заполнение многомерных массивов JavaScript

//  72.1 Сформируйте с помощью двух вложенных циклов следующий массив: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

let arr13 = [];

for (let i = 0; i < 5; i += 1) {
  arr13[i] = [];
  for (let j = 0; j < 5; j += 1) {
    arr13[i].push(j + 1);
  }
}

// console.log(arr13);

// 72.2 Сформируйте с помощью двух вложенных циклов следующий массив: [['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 	'x', 'x']]

function arrayFill(value, length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = [];
    for (let j = 0; j < length; j++) {
      arr[i].push(value);
    }
  }
  return arr;
}

// console.log(arrayFill("x", 3));
let value = "x";
let arr14 = [];
for (let i = 0; i < 3; i += 1) {
  arr14[i] = [];
  for (let j = 0; j < 3; j += 1) {
    arr14[i].push(value);
  }
}

// console.log(arr14);

// 70.3 Сформируйте с помощью трех вложенных циклов следующий массив:

[
  [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ],
  [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ],
  [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ],
];

let fillArr = [];

for (let i = 0; i < 3; i += 1) {
  fillArr[i] = [];
  for (let j = 0; j < 2; j += 1) {
    fillArr[i][j] = [];
    for (let k = 0; k < 5; k += 1) {
      fillArr[i][j].push(k + 1);
    }
  }
}
// console.log(fillArr);
