// 52

// let arr = ["a", "b", "c", "d", "e"];
// // let arr = [1, 2, 3, 4, 5];
// let flag = false;

// for (let elem of arr) {
//   if (elem === "c") {
//     flag = true;
//     break;
//   }
// }

// if (flag === true) {
//   console.log("есть");
// } else {
//   console.log("нет");
// }

// 53

// let number = 3;
// let flag = true;

// for (let i = 2; i <= 99; i += 1) {
//   if (number / i === 0) {
//     flag = false;
//     break;
//   }
// }
// console.log(flag);

// 54 Циклы без заданного количества итераций в JavaScript

// let num = 500;

// while (num > 10) {
//   num = num / 2;
// }

// console.log(num); // 7.8125

// for (var num = 500; num > 10; num = num / 2);
// console.log(num);// 7.8125

// 54.1
// Дано число num с неким начальным значением.Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000.
// Какое число получится ? Посчитайте количество итераций, необходимых для этого.

// let number = 10;
// let i = 0;

// while (number < 1000) {
//   number = number * 3;
//   i += 1;
// }
// console.log(number, i);

// 54.2
// Решите предыдущую задачу через цикл for.
for (var num = 10, i = 0; num < 1000; num = num * 3, i++);
console.log(num, i); // 2430 5
