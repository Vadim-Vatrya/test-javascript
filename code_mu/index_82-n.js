// 82 Основы работы с пользовательскими функциями в JavaScript

// 82.1 Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.

// function getSum(a, b) {
//   let sum = 0;
//   for (let i = a; i <= b; i += 1) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(getSum(1, 100));

// 83 Параметры функций в JavaScript

// 83.1 Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.

// function func(a) {
//   return a ** 3;
// }
// console.log(func(5));

// 83.2 Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное.
// В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.

// function examinationNum(a) {
//   return a > 0 ? console.log("+++") : console.log("---");
// }

// examinationNum(0);

// 83.3 Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.

// function summa(a, b, c) {
//   return a + b + c;
// }

// console.log(summa(5, 10, 15));

// 83.4 Сделайте функцию func, которая параметром будет принимать 3 числа и выводить на экран их сумму. Пусть даны 3 переменные с числами:
// С помощью созданной вами функции выведите на экран сумму значений эти переменных.

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// function func(param1, param2, param3) {
//   return param1 + param2 + param3;
// }
// console.log(param1 + param2 + param3);

// 84 Инструкция return в JavaScript

// 84.1 Сделайте функцию, которая параметром принимает число,
// а возвращает куб этого числа.С помощью этой функции найдите куб числа 3 и запишите его в переменную result.

// function func(a) {
//   return a ** 3;
// }

// let result = func(3);
// console.log(result);

// 84.2 Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа.
// С помощью этой функции найдите корень числа 3, затем найдите корень числа 4.
// Просуммируйте полученные результаты и выведите их на экран.

// function func(a) {
//   return Math.sqrt(a);
// }

// let result = func(4) + func(9);
// console.log(result);

// 84.3 Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
// С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.

// function sqrt(num) {
//   return Math.sqrt(num);
// }

// function round(num) {
//   return num.toFixed(3);
// }

// let result = round(sqrt(9));
// console.log(result);

// 84.4 Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:
// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.

// function sqrt(num) {
//   return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// let result = sum(sqrt(2), sqrt(3), sqrt(4));
// console.log(result);

// 84.5 Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:
// С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части.

// function round(num) {
//   return num.toFixed(3);
// }

// let result = round(sum(sqrt(2), sqrt(3), sqrt(4)));
// console.log(result);

// 84.10 Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10.
// Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

function 
