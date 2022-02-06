// 103.1 Сделайте функцию func, которая будет возвращать через return какую-либо строку.

// function func () {
//     return 'String';
// };

// console.log(func);

// 103.2 Выведите результат работы функции func алертом на экран.
// func();

// 103.3 Выведите исходный код функции func алертом на экран.
// alert(func())

// 103.4 Запишите в переменную func число 123, тем самым затерев функцию из этой переменной.
// Выведите новое значение переменной func на экран.

// func = 123;
// console.log(func)

// 103.5 Сделайте функцию func1, которая будет возвращать через return число 3.

// function func1() {
//     return 3;
// };

// console.log(func());

// 103.6 Скопируйте исходный код функции func1, в переменную func2.

// let func2 = func1;
// console.log(func2());
// console.log(func1());

// function funcSum() {
//     return func2() + func1()
// }

// console.log(funcSum())

// 103.7 Выведите на экран сумму результатов работы функций func1 и func2.

// function func1() {
//     return 3;
// };

// let func2 = func1;
// console.log(func2());
// console.log(func1());

// function funcSum() {
//     return func2 + func1;
// }

// console.log(funcSum());

// 103.7
// let func = function() {
// 	return 1;
// };

// 106

// 106.1 Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1,
//  вторая - число 2, третья - число 3.
// let arr = [
// 	function() {return 1},
// 	function() {return 2},
// 	function() {return 3},
// ];
//  106.2
// console.log(arr[2]())
// arr[2]();

// 106.3

// let sum =  arr[0]() + arr[1]() + arr[2]()

// console.log(sum);

// 106.4 Переберите созданный вами массив arr циклом и выведите результаты работы всех функций
// на экран.

// let arr = [
// 	function() {return 1},
// 	function() {return 2},
// 	function() {return 3},
// ];

// for (let i = 0; i < arr.length; i += 1) {
// 	alert(arr[i]());
// };

// 107

// 107.1

// let obj = {
//    func1: function() {return 1},
//    func2: function() {return 2},
//    func3: function() {return 3},
// };

// let sum = obj.func1() + obj.func2() + obj.func3();
// console.log(sum);

// 107.2 Переберите созданный объект циклом и выведите результаты работы функций на экран.

// for (let key in obj) {
//     alert(key())
// }

// 107.3 Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с
// числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива,
// вторая функция - сумму квадратов, а третья - сумму кубов.

// const math = {
//     sum(arr) {
//       return arr.reduce((sum, elem) => sum + elem, 0);
//     },
//     square(arr) {
//       return arr.reduce((sum, elem) => sum + elem ** 2, 0);
//     },
//     cube(arr) {
//       return arr.reduce((sum, elem) => sum + elem ** 3, 0);
//     }
//   };

//   let arr = [1, 2, 3, 4, 5]

//   console.log(math.sum(arr));
//   console.log(math.square(arr));
//   console.log(math.cube(arr));

// 108

// 108.1 Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром
//  функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3.
//  Выведите на экран сумму результатов функций.

// function test(func1, func2, func3) {
//     alert(func1());
//     alert(func2());
//     alert(func3());
// };

// function test(func1, func2, func3) {
//     alert(func1() + func2() + func3());

// };

// 108.2 Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
//  test(
//     	function() {return 1;},
//     	function() {return 2;},
//      function() {return 3;}
//     );

// function test(func1, func2, func3) {
//     alert(func1() + func2() + func3());

// };

// 108.3 Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.

// function get1() {
// 	return 1;
// }
// function get2() {
// 	return 2;
// }
// function get3() {
// 	return 3;
// }

// test(get1, get2, get3); // выведет 6

// function test(func1, func2, func3) {
// 	alert( func1() + func2() + func3() );
// };

// 108.4 Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.

// let get1 = function () {
// 	return 1;
// };

// let get2 = function () {
// 	return 2;
// };

// let get3 = function () {
// 	return 3;
// };

// test(get1, get2, get3); // выведет 6

// function test(func1, func2, func3) {
// 	alert( func1() + func2() + func3() );
// };

// 108.5

// test(function(num) {
// 	return num ** 3;
// });

// function test(func) {
// 	alert(func(3));
// };

// 108.6 Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.

// function func(num) {
//     return num ** 3;
// };

// test(func);
// function test(func) {
// 	alert(func(3));
// };

// 108.7

// let func = function(num) {
//     return num ** 3;
// };

// test(func);
// function test(func) {
// 	alert(func(3));
// };

// 108.8 Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму.
// При вызове передаваемая функции внутри test передайте в передаваемую функцию число 2 и число 3.
// Выведите алертом результат.

// function func(num, num1) {
//     return num + num1;
// };

// test(func);

// function test(func) {
// 	alert(func(3,5));
// };

// 108.9

// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// };

// test(3, function(num) {
//     return num ** 2;
// });

// 110

// 110.1 Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать
// сумму квадрата первого числа с кубом второго числа. Сделайте для этого вспомогательную функцию
// square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.

// function func(num1, num2) {
//     return square(num1) + cube(num2)
// };

// function square(num) {
//     return num ** 2;
// };

// function cube(num) {
//     return num ** 3;
// };

// console.log(func(4, 5));

// 112

// // 112.1
// function func1() {
// 	return function() {
// 		return 1;
// 	};
// }
// function func2() {
// 	return function() {
// 		return 2;
// 	};
// }

// alert( func1()() + func2()() );

// 112.2
// function func() {
// 	return function() {
// 		return function() {
//             return function() {
//                 return function() {
//                     return '!';
//                 };
//             };
// 		};
// 	};
// }

// alert( func()()()()() );

// 112.3
// function func(num1) {
// 	return function(num2) {
//         return function (num3) {
//             return num1 + num2 + num3;
//         }
// 	};
// }

// alert( func(2)(3)(4) );

// 112.4
// function func(num1) {
// 	return function(num2) {
//         return function (num3) {
//             return function (num4) {
//                 return function () {
//                     return [].concat(num1, num2, num3, num4);
//                 }
//             }

//         }
// 	};
// };

// alert( func(2)(3)(4)(5)() );

// 114
// function test() {
// 	let num = 10;

// 	return function() {
// 		alert(num);
// 		num -= 1;
// 	};
// };

// let func1 = test();
// test();
// 114.2 Пусть функция в замыкании хранит число 10. Сделайте так,
// чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.

// 117

// 117.2 Дан массив со строками.
// С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
// let arr = ['start', 'middle', 'end'];
// function each(arr, callback){
// let result = [];
// for(let elem of arr){
// result.push(callback(elem));
// }
// return result;
// }
// alert(each(arr, function(str){
// 	 let result = '';
// 	 for(let i = str.length - 1; i >= 0 ; i--){
// 		 result += str[i]
// 	 }
// 		 return result;
// }));

//117.1 Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент
// в два раза.

// let arr = [1, 2, 3, 4, 5]
// function each(arr, callback) {
// 	let result = [];

// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}

// 	return result;
// };

// alert(each([1, 2, 3, 4, 5], function (num) {
// 	return num * 2;
// }));

// 117.3 Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

// let arr = ['start', 'middle', 'end'];
// function each(arr, callback){
// let result = [];
// for(let elem of arr){
// result.push(callback(elem));
// }
// return result;
// };

// let result = each(arr, function (str) {
// 	let result = str.slice(0, 1).toUpperCase() + str.slice(1);
// 	return result;
// });

// console.log(result);

// 117.4 С помощью следующей функции возведите все элементы массива в куб:

// function cube(num) {
// 	return num ** 3;
// };

// let res = each(arr, cube);
// console.log(res);

// 118

// 118.1 Дана следующая функция с коллбэком:

// let result = every([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// let result = every([1, 2, 3, 4, 5], elem => elem > 0);

// 118.2

// let result = every([1, 2, 3, 4, 5], function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// function every(arr, callback) {
//   let result = [];
//   for (let elem of arr) {
//     result.push(callback(elem));
//   }
//   return result;
// }

// let result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);
// console.log(result);

// 118.3
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let result = each(arr, function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// function each(arr, callback) {
//   let result = [];
//   for (let subArr of arr) {
//     for (let elem of subArr) {
//       result.push(callback(elem));
//     }
//   }
//   return result;
// }

// let result = each(arr, (elem, index) => elem * index > 10);

// console.log(result);

// 119

// 119.1  Дан массив. С помощью рекурсии выведите элементы этого массива на экран.

// let array = [1, 2, 3, 4, 5];
// let i = 0;
// function func(arr) {
//   console.log(arr[i]);
//   i += 1;
//   if (i < arr.length) {
//     func(arr);
//   }
// };

// func(array);

// function func(arr) {
//   console.log(arr.shift(), arr);

//   if (arr.length != 0) {
//     func(arr);
//   }
// }

// func([1, 2, 3, 4, 5]);

// 119.2 С помощью рекурсии найдите сумму квадратов элементов этого массива.
// let array = [1, 2, 3, 4, 5];

// function square(arr) {
//   let sum = arr.shift() ** 2;
//   //   console.log(sum);
//   if (arr.length !== 0) {
//     sum += square(arr);
//   }
//   return sum;
// }

// console.log(square(array));

// 120

// function func(arr) {
// 	for (let elem of arr) {z
//     if (typeof elem == "object") {
//       func(elem);
//     } else {
//       console.log(elem);
//     }
//   }
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

// 120.2 Дан многомерный массив произвольного уровня вложенности, например, такой:
// [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
// Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного
//  выше массива это будет выглядеть вот так:
// [1, 2, 7, 8, 3, 4, 5, 6, 7]

function recursionArr(arr) {
  for (let elem of arr) {
    if (typeof elem === "object") {
      recursionArr(elem);
    } else {
      console.log(elem);
    }
  }
}

recursionArr([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

// 120.3 Дан многомерный объект произвольного уровня вложенности, например, такой:
// С помощью рекурсии выведите все примитивные элементы этого объекта на экран.

// let obj = {
//   a: 1,
//   b: { c: 2, d: 3, e: 4 },
//   f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
// };

function recursionObj(obj) {}
