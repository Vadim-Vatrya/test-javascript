
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
// 91.1 Реализуйте функцию getOwnDivisors. Потестируйте ее работу.

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

// 91.2 Реализуйте функцию getSum. Потестируйте ее работу.

// function getSum(arr) {
//     let sum  = 0;
//     for (let elem of arr) {
//         sum += Number(elem);
//     }
//     return sum;
// };
// console.log(getSum(getOwnDivisors(220)));
// console.log(getSum(getOwnDivisors(284)));

// 91.3 Проверьте работу функции isFreindly.

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

// 91.4 Сделайте функцию getFreindly, которая будет находить пары дружественных чисел в заданном промежутке и возвращать их 
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


// 91.5 Совершенное число - целое число, равное сумме всех своих собственных делителей (то есть всех положительных делителей, 
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


// 92 
// 92.1

// function getIntersection(arr1, arr2) {
//     let result = [];
//     for (let elem of arr1) {
//         if (inArr(elem, arr2)) {
//             result.push(elem);
//         }
//     }
//     return result;
// };

// function inArr(elem, arr) {
//     return arr.indexOf(elem) !== -1;
// };

// console.log( getIntersection([1, 2, 3], [2, 3, 4, 5]) );

// 93

// 93.1 Пусть у нас даны два массива: Давайте функцию getDiff, которая будет находить разность двух массивов.

// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4, 5];
// console.log(getDifference(arr1, arr2))

// function getDifference(arr1, arr2) {
//     // let result = [];

//     let difference1 = getDiffenceTwoArr(arr1, arr2);
//     let difference2 = getDiffenceTwoArr(arr2, arr1);

//     return [].concat(difference1, difference2)
// };

// function getDiffenceTwoArr (arr1, arr2) {
//     let result = [];
//     for (let elem of arr1) {
//         if(!inArray(elem, arr2)) {
//             result.push(elem);
//         }
        
//     }
//     return result;
// };


// function inArray(elem, arr) {
//     return arr.indexOf(elem) !== -1
// };

// 94 

// 94.1 Реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать 
// два числа и возвращать НОД этих двух чисел. При решении задачи старайтесь использовать 
// вспомогательные функции, в том числе полученные нами ранее в теоретической части.

// console.log(getGreatestCommonDivisor(32, 96))
// function getGreatestCommonDivisor(a, b) {
//     let divisors = getIntersection(getDivisors (a), getDivisors (b));

//     return getMaxOfArray(divisors);
// };

// function getDivisors (num) {
//     let arr = [];
//     for (let i = 2; i < num; i += 1) {
//         if (num % i === 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// };


// function getIntersection(arr1, arr2) {
//     let result = [];
//     for (let elem of arr1) {
//         if(inArray(elem, arr2)) {
//             result.push(elem);
//         }
//     }
//     return result;
// };

// function inArray(elem, arr) {
//         return arr.indexOf(elem) !== -1;
//     };

// function getMaxOfArray(numArray) {
//         return Math.max.apply(null, numArray);
//   }

// 94.2 Положительные целые числа, не имеющие общих делителей, кроме тривиальной единицы, 
// называются взаимно простыми. Говоря другими словами, два числа можно назвать взаимно простыми, 
// если их НОД равен единице. Напишите функцию, которая параметрами будет принимать два числа и 
// проверять - взаимно простые они или нет.

// console.log(getMutuallySimpleDigits(32, 96))

// function getMutuallySimpleDigits(a, b) {
//     return getNod(a, b) === 1 ? console.log('взаимно простые числа') : console.log('не взаимно простые числа')
// };

// function getNod(a, b) {
//     let divisors = getIntersection(getDivisors (a), getDivisors (b));
// return getMinOfArray(divisors);
// }

// console.log(getNod(11, 13))
// function getDivisors (num) {
//     let arr = [];
//     for (let i = 1; i < num; i += 1) {
//         if (num % i === 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// };

// function getIntersection(arr1, arr2) {
//     let result = [];
//     for (let elem of arr1) {
//         if(inArray(elem, arr2)) {
//             result.push(elem);
//         }
//     }
//     return result;
// };

// function inArray(elem, arr) {
//         return arr.indexOf(elem) !== -1;
//     };

// function getMinOfArray(numArray) {
//         return Math.min.apply(null, numArray);
//   }


// 95

// 95.1 

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// let arr = [1, 2, 3, 4, 4, 5];

// let key = getRandomInt(0, arr.length - 1);

// function random(arr) {
//     return arr[getRandomInt(0, arr.length - 1)]
// };

// console.log(random(arr));


// 95.2 Используя созданную функцию, найдите сумму трех случайных элементов из массива.

// function getSumRandomElem(arr) {
   
//     let digit1 = arr[getRandomInt(0, arr.length - 1)];
//     let digit2 = arr[getRandomInt(0, arr.length - 1)];
//     let digit3 = arr[getRandomInt(0, arr.length - 1)];
//     console.log(digit1, digit2, digit3);
//     return digit1 + digit2 + digit3;
// };

// console.log(getSumRandomElem(arr));

//  96 

// 96.1 

// function shuffle(arr) {
//     let result = [];

//     while(arr.length > 0) {
//         let randomDigit = getRandomInt(0, arr.length - 1)
//         let elem = arr.splice(randomDigit, 1)[0]
//         result.push(elem);
//     }
//     return result;
// };


// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let arr = [1, 2, 3, 0, 4, 5, 15, 22];
// console.log(shuffle(arr));

// 96.2 Сделайте функцию range принимающую параметрами 2 целых числа - начало и конец диапазона, 
// и возвращающую массив, заполненный целыми числами из этого диапазона.

// function range(start, end) {
//     let arr = [];
//     for (let i = start; i <= end; i += 1) {
//         if (isNaN (start) || isNaN (end) || start >= end) return false;
//         arr.push(i);
//     }
//     return arr;
// };

// console.log(range(2, 10));
// console.log(range(2, 1));

// 96.3 Сделайте функцию rangeRand, возвращающую массив, заполненный случайными 
// целыми числами из заданного диапазона. При этом числа не должны повторяться.
//  Для решения задачи используйте комбинацию функций range и shuffle.

// function rangeRand(min, max) {
//     return shuffle(range(min, max))
// }

// function range(min, max) {
//     let arr = [];
//     for (let i = min; i <= max; i += 1) {
//         if (isNaN (min) || isNaN (max) || min >= max) return false;
//         arr.push(i);
//     }
//     return arr;
// };

// function shuffle(arr) {
//     let result = [];

//     while(arr.length > 0) {
//         let randomDigit = getRandomInt(0, arr.length - 1)
//         let elem = arr.splice(randomDigit, 1)[0]
//         result.push(elem);
//     }
//     return result;
// };


// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// let arr = [1, 2, 3, 0, 4, 5, 15, 22];

// console.log(rangeRand(1, 22));



// 97 


// 97.1 

// function random(arr, length) {
//     return first(shuffle(arr), length);
// };

// function first(arr, length) {
//     return arr.slice(0, length);
// }

// function shuffle(arr) {
// 	let result = [];
	
// 	while (arr.length > 0) {
// 		let random = getRandomInt(0, arr.length - 1);
// 		let elem = arr.splice(random, 1)[0];
// 		result.push(elem);
// 	}
	
// 	return result;
// }

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// 98 
// 98.1 
// console.log(getLuckyTickets());

// function getLuckyTickets() {
// 	let result = [];
	
// 	for (let i = 1001; i <= 999999; i++) {
// 		if (isLucky(i)) {
// 			result.push(i);
// 		}
// 	}
	
// 	return result;
// }

// function isLucky(num) {
// 	let str = normalizeNum(num);
	
// 	let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// 	let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
	
// 	return sum1 == sum2;
// }

// function normalizeNum(num) {
// 	let str = String(num);
	
// 	if (str.length == 5) {
// 		str = '0' + str;
// 	}
// 	if (str.length == 4) {
// 		str = '00' + str;
// 	}
	
// 	return str;
// }

// 99 

// 99.1
function isLucky(num) {
	let str = String(num);
	let sum1 = 0;
    let sum2 = 0;
for (let i = 0; i < str.length / 2; i += 1) {
    sum1 += Number(i)
};

for (let i = str.length; i < str.length; i += 1) {
    sum2 += Number(i)
}
	return sum1 == sum2;
};

// 99.2 
function normalizeNum(num, digitsAmount) {
	let str = String(num);
	
	// код, дополняющий количество цифр
	// нулями до количества из digitsAmount
	
	return str;
}




