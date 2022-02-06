// 121

// 121.1 Дан массив с числами. Используя метод map извлеките из каждого элемента массива
// квадратный корень и запишите результат в новый массив.

// let arr = [1, 4, 9, 16, 25];
// let result = arr.map((elem) => Math.sqrt(elem));
// console.log(result);
// let result = arr.map(function (elem) {
//   return Math.sqrt(elem);
// });
// console.log(result);

// 121.2
// let arr = [1, 4, 9, 16, 25];
// let result = arr.map((elem) => elem + "!");
// console.log(result);
// let result = arr.map(function (elem) {
//   return (elem = elem + "!");
// });
// console.log(result);

// 121.3 Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
// let arr = ["start", "middle", "end"];
// let result = arr.map((elem) => elem.split("").reverse().join(""));
// console.log(result);
// let result = arr.map(function (elem) {
//   return (elem = elem.split("").reverse().join(""));
// });
// console.log(result);

// 121.4 let arr = ['123', '456', '789'];
// Используя метод map преобразуйте этот массив в следующий:
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let arr = ["123", "456", "789"];
// let result = arr.map(function (elem) {
//   elem = elem.split("");
//   let res = elem.map(function (subElem) {
//     return (subElem = Number(subElem));
//   });
//   return res;
// });
// console.log(result);

// 121.5 Дан массив с числами. Используя метод map запишите в каждый элемент массива значение
// этого элемента, умноженное на его порядковый номер в массиве.
// let arr = [1, 2, 3, 4, 5];
// let result = arr.map((elem, index) => elem + "index");
// console.log(result);
// let arr = [2, 5, 12, 3];
// let result = arr.map((elem, index) => (elem = elem * index));
// console.log(result);
