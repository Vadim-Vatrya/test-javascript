
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

//  88.4 Даны два числа. Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа. Некий программист уже написал решение задачи, вот оно:

// let num1 = 234;
// let num2 = 531;

// let digits1 = String(num1).split('');
// let digitsSum1 = 0;
// for (let digit1 of digits1) {
// 	digitsSum1 += Number(digit1);
// }

// let digits2 = String(num1).split('');
// let digitsSum2 = 0;
// for (let digit2 of digits2) {
// 	digitsSum2 += Number(digit2);
// }

// if (digitsSum1 == digitsSum2) {
// 	alert('суммы цифр совпадают');
// } else {
// 	alert('суммы цифр не совпадают');
// }
// В чем недостатки приведенного кода? Переделайте код так, чтобы он был более удачным.
// function sumSeveralDigits (num) {
//     let digits = String(num).split('');
//     let digitsSum = 0;
//     for (let digit of digits) {
//         digitsSum += Number(digit);
//     }
//     return digitsSum;
// };

// function compareDigits(a,b) {
//     return sumSeveralDigits(a) === sumSeveralDigits(b) ? console.log('суммы цифр совпадают') : console.log('суммы цифр не совпадают');
// };

// console.log(compareDigits(234, 531));

// 88.5 Дан массив с числами. Необходимо перебрать этот массив с числами и вывести в консоль нетривиальные делители этих чисел (то есть исключая число 1 и само число). Некий программист уже написал решение задачи:
// Программист не тестировал отдельно работу функции getDivisors, а написал весь код сразу
//  и затем запустил его. При запуске оказалось, что код работает как-то не так. Видимо, в 
//  функции getDivisors была допущена какая-то ошибка.
// Найдите и исправьте ошибку. Потестируйте отдельно функцию getDivisors, чтобы убедиться,
//  что она работает корректно после вашей правки. После того, как вы убедитесь в корректности 
//  работы функции - проверьте полный код решения задачи.

// let nums = [12, 24, 35, 14];

// for (let num of nums) {
// 	console.log(num + ': ' + getDivisors(num).join(', '));
// }

// function getDivisors(num) {
// 	let result = [];
	
// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) {
// 			result.push(i);
// 		}
// 	}
	
// 	return result;
// }

// console.log(getDivisors(12));

// 89

// 89.1  Дана функция getSum, находящая сумму элементов переданного массива:
// Дана функция getDigits, возвращающая массив цифр числа:
// Используя комбинацию приведенных функций найдите сумму цифр числа 12345.

// function getSum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
	
// 	return sum;
// };


// function getDigits(num) {
// 	return String(num).split('');
// };

// let num = 12345;
// console.log(getSum(getDigits(num)));


// 89.2 ано число. Нужно найти его делители (без 1 и самого числа), а затем найти среднее арифметическое 
// (сумма делить на количество) делителей числа и вывести результат на экран. Некий программист уже написал решение задачи:
// Нахождение массива делителей числа:
// Программист не тестировал отдельно работу своих функций, а написал весь код сразу и затем запустил его. 
// При запуске оказалось, что код работает неверно. Найдите и исправьте ошибки программиста. Потестируйте 
// отдельно работу всех функций, чтобы убедиться, что они работают корректно после ваших правок. После 
// того, как вы убедитесь в корректности работы функций - проверьте полный код решения задачи.


// console.log( getAvg(getDivisors(24)) );

// // Нахождение среднего арифметического:
// function getAvg(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum / arr.length;
// };

// function getDivisors(num) {
// 	let arr = [];
// 	for (let i = 2; i < num; i += 1) {
// 		if (num % i === 0) {
// 			arr.push(i);
// 		}
// 	}
//     return arr;
// };

// 90

// 90.1

// function getDigits(num) {
//     return String(num).split('');
// };

// console.log(getDigits(24));

// function getSum(arr) {
//     let sum = 0;
//     for(let elem of arr) {
//         sum += Number(elem);
//     }
//     return sum;
// };

// console.log(getSum(getDigits(24)));

// function inRange(num) {
//     let sum  = getSum(getDigits(num));
//     return sum >= 1 && sum <= 9;
// };

// console.log(inRange(5));

// let arr = [1, 2, 15, 89, 220];
// let result = [];
// for (let elem of arr) {
//     if (inRange(elem)) {
//         result.push(elem);
//     }

// };
// console.log(result);

// 91 
// 99.1 Реализуйте функцию getOwnDivisors. Потестируйте ее работу.

// function getOwnDivisors(num) {
//    let result = [];
//    for (let i = 1; i < num; i += 1){
//        if (num % i === 0) {
//            result.push(i);
//        }
//    }
//     return result;
// };

// console.log(getOwnDivisors(11230));
// console.log(getOwnDivisors(6666));
// console.log(getOwnDivisors(220));
// console.log(getOwnDivisors(284));

// 99.2 Реализуйте функцию getSum. Потестируйте ее работу.

// function getSum(arr) {
//     let sum  = 0;
//     for (let elem of arr) {
//         sum += Number(elem);
//     }
//     return sum;
// };
// console.log(getSum(getOwnDivisors(220)));
// console.log(getSum(getOwnDivisors(284)));

// 99.3 Проверьте работу функции isFreindly.

// function isFrendly(num1, num2) {
// 	let sum1 = getSum(getOwnDivisors(num1));
// 	let sum2 = getSum(getOwnDivisors(num2));
// 	 return sum1 == num2 && sum2 == num1
// 	// if (sum1 == num2 && sum2 == num1) {
// 	// 	return true;
// 	// } else {
// 	// 	return false;
// 	// }
// };

// console.log(isFrendly(220, 284));

// 99.4 Сделайте функцию getFreindly, которая будет находить пары дружественных чисел в заданном промежутке и возвращать их 
// в виде двухмерного массива вида следующего вида:[ [220, 284], [1184, 1210], [2620, 2924] ]. С помощью созданной функции найдите 
// все пары дружественных чисел на промежутке от 1 до 3000.

// console.log(getFreindly(1, 3000));

// function getFreindly(a, b) {
//     let arr = [];
//     for (let i = a; i <= b; i += 1) {
//         for (let j = i +1; j <= b; j += 1) {
//             if (i === getSum(getOwnDivisors(j)) && j === getSum(getOwnDivisors(i))) {
//                 arr.push([i, j]);
//             }
//         }
//     }
//     return arr;
// }

// function getSum(arr) {
//     let sum  = 0;
//     for (let elem of arr) {
//         sum += Number(elem);
//     }
//     return sum;
// };

// function getOwnDivisors(num) {
//        let result = [];
//        for (let i = 1; i < num; i += 1){
//            if (num % i === 0) {
//                result.push(i);
//            }
//        }
//         return result;
//     };


// 99.5 Совершенное число - целое число, равное сумме всех своих собственных делителей (то есть всех положительных делителей, 
// отличных от самого числа). Сделайте функцию getPerfect,
//  которая будет находить совершенные числа в заданном диапазоне. Проверьте работу функции в промежутке от 1 до 1000.

// function getPerfect(a, b) {
//     let arr = [];
//     for (let i = a; i <= b; i += 1) {
//         if (getSum(getOwnDivisors(i)) === i) {
//             arr.push(i);
//         }
//     }
//     return arr;
// };

// function getSum(arr) {
//     let sum  = 0;
//     for (let elem of arr) {
//         sum += Number(elem);
//     }
//     return sum;
// };

// function getOwnDivisors(num) {
//        let result = [];
//        for (let i = 1; i < num; i += 1){
//            if (num % i === 0) {
//                result.push(i);
//            }
//        }
//         return result;
//     };

//     console.log(getPerfect(1, 1000));
