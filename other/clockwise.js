// 1. Сделайте функцию, которая с помощью рекурсии выведет первые n чисел Фибоначчи.
// Числа Фибоначчи строятся следующим образом: каждое новое число равно сумме двух предыдущих.
// Первые два числа Фибоначчи - это 1 и 1. Следующее число будет равно 1 + 1 = 2, следующее
// число будет равно 1 + 3 = 4 и так далее

// function func(prevPrevNum = 1, prevNum = 1, n) {
//   let current = prevPrevNum + prevNum;
//   console.log(current);
//   if (current <= n) {
//     func(prevNum, current);
//   }
// }
// func(1, 1, 10);
// function func(prevPrevNum, prevNum) {
//   let current = prevPrevNum + prevNum;
//   console.log(current);
//   if (current <= 1000) {
//     func(prevNum, current);
//   }
// }

// function func(prevPrevNum, prevNum) {
//   let result = [];
//   function func1(prevPrevNum, prevNum) {
//     let current = prevPrevNum + prevNum;
//     result.push(current);
//   }
//   console.log(func1(prevPrevNum, prevNum));
// }
// func(1, 2);

// 2 Дан многомерный массив произвольного уровня вложенности, например, такой: [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
// Выведите на экран все элементы-массивы, содержащие внутри себя только примитивы.
let arrs = [1, [2, 7, 8], [3, 4], [5, [6, 7]], 9, 10];
// function func(arr) {
//   let result = [];

//   for (let elem of arr) {
//     if (typeof elem === "object") {
//       result.push(...func(elem));
//     } else {
//       result.push(elem);
//     }
//   }
//   return result;
// }

// console.log(func(array));

let result = [].concat(...arrs);
console.log(result);
