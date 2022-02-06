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
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let result = arr.map(function (elem) {
//   return elem.map(function (num) {
//     return num * num;
//   });
// });

// console.log(result);
// let result = arr.map((elem) => elem.map((elem) => elem * elem));
// console.log(result);

// 123

// 123.1 Дан массив с числами. Оставьте в нем только положительные числа
// let arr = [-1, -2, -3, -4, -5, 1, 2, 3, 4, 5];
// let result = arr.filter((elem) => elem > 0);
// console.log(result);

// 123.2 Дан массив с числами. Оставьте в нем только отрицательные числа.

// let arr = [-1, -2, -3, -4, -5, 1, 2, 3, 4, 5];
// console.log(arr.filter((elem) => elem < 0));

// 123.3
// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
// let arr = [-1, -2, -3, -4, -5, 1, 42, 13, 4, 5];
// console.log(arr.filter((elem) => elem > 10));

// 123.4 Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// let arr = ["aaa", "aaaqqq66", "zzzqq6", "zz", "qsaa", "q", "az"];

// console.log(arr.filter((elem) => elem.length >= 5));

// 123.5 Дан массив с числами.
// Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
// let arr = [2, 10, 8, 12, 7, 13];
// console.log(arr.filter((elem, index) => elem * index < 30));

// 123.6 Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]].
// Оставьте в нем только обычные элементы.
// let arr = [1, 2, [3, 4], 5, [6, 7]];
// console.log(arr.filter((elem) => typeof elem !== "object"));

// 123.7 Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// let arr = [-1, -2, -3, -4, -5, 1, 2, 3, 4, 5];
// console.log(arr.filter((elem) => elem < 0).length);

// 124

//124.1 Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// let arr = [2, 4, 6, 8];
// console.log(arr.every((elem) => elem > 0));

// 124.2 Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на
//  их порядковый номер меньше 30.
// let arr = [2, 10, 8, 7, 13];
// console.log(arr.every((elem, index) => elem * index < 30));

// 125

// 125.1 Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
// let arr = [2, 4, 6, 8];
// console.log(arr.some((elem) => elem > 0));

// 125.2 Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его
//  значения на порядковый номер больше 30.
// let arr = [2, 10, 8, 7];
// console.log(arr.some((elem, index) => elem * index > 30));

// 126
