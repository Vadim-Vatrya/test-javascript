
//  88 Правильное использование функций JavaScript

// 88.1 Дана функция, проверяющая числа на простоту:
// С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }

// function simpleNumbers(a, b) {
//     let arr = [];
//     for (let i = a; i <= b; i += 1) {
//         if(isPrime(i)) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// console.log(simpleNumbers(1, 100));

//88.2  Дана функция getDigitsSum, которая параметром принимает целое число и возвращает сумму его цифр:
// С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.

// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
	
// 	return sum;
// }

// function getYears(a, b) {
//     let arr = [];
//     for (let i = a; i <= b; i += 1) {
//         if (getDigitsSum(i) === 13) {
//             arr.push(i)
//         }
//     }
//     return arr;
// }

// console.log(getYears(1, 2030));

// 88.3 Пусть дан какой-то массив с числами, например, такой: [123, 456, 789] 
// Давайте сделаем так, чтобы цифры в каждом элементе массива были в обратном порядке.То есть из нашего массива сделаем следующий:
// [321, 654, 987]
// Некий программист уже написал код, реализующий описанную задачу:Переделайте приведенный код так, чтобы переворот числа выполняла отдельная функция.

// let nums = [123, 456, 789];

// let result = [];
// for (let num of nums) {
// 	result.push(String(num).split('').reverse().join(''));
// }

// console.log(result); // выведет [321, 654, 987]

// function reverseString(nums) {
//     return nums.push(String(num).split('').reverse().join(''));
// }


