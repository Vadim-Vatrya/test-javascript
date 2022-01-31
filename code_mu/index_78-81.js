//  78 Математические методы в JavaScript Работа со степенью и корнем

// 78.1 Возведите 2 в 10 степень.

// let number = Math.pow(2, 10);
// console.log(number);

// 78.2 Найдите квадратный корень из 245.

// let number = Math.sqrt(245);
// console.log(number);

// 78.3 Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

// let arr = [4, 2, 5, 19, 13, 0, 10];

// let sum = 0;
// for (let i = 0; i < arr.length; i += 1) {
//   sum += Math.pow(arr[i], 3);
// }
// let sqrt = Math.sqrt(sum);
// console.log(sqrt);

// 78.4 Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

// let number = Math.sqrt(349);
// console.log(number);
// console.log(Math.round(number));
// console.log(number.toFixed(1));
// console.log(number.toFixed(2));

// 78.5 Найдите квадратный корень из 587.
// Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

// let number = Math.sqrt(587);
// console.log(number);
// console.log(Math.ceil(number));
// console.log(Math.floor(number));

// 78.6 Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

// 78.7 Выведите на экран случайное целое число от 1 до 100.

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomNumber(1, 100));

// 78.8 С помощью цикла заполните массив 10-ю случайными целыми числами.

// let arr = [];

// for (let i = 0; i < 10; i += 1) {
//   arr[i] = Math.round(Math.random() * 100);
// }

// console.log(arr);

// 78.9 Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

// function getDifference(a, b) {
//   return Math.abs(a - b);
// }

// console.log(getDifference(-3, 2));

//  79.1 Дана строка 'js'. Сделайте из нее строку 'JS'.
// let str = "js";
// console.log(str.toUpperCase());

// 79.2 Дана строка 'JS'. Сделайте из нее строку 'js'.

// let str = "JS";
// console.log(str.toLowerCase());

// 79.3 Дана строка 'я учу javascript!'.
// Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами(через substr, substring, slice).

// let str = "я учу javascript!";
// console.log(str.slice(2, 5) + " " + str.slice(6, -1));
// console.log(str.substring(1, 4) + " " + str.substring(6, -1));
// console.log(str.substr(2, 3));
// console.log(str.substr(6, -1));

// 79.4 Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.
// let str = "abcde";
// console.log(str.indexOf("c"));

// 79.5 Дана строка. Проверьте, есть ли в этой строке символ 'a'.
// let str = "abcde";
// console.log(str.indexOf("a"));

//  79.6 Дана строка. Проверьте, начинается ли эта строка с символа 'a'.
// console.log(str.indexOf("a", 0));

// 79.7 Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.
// console.log(str.indexOf("a", 4));

// 79.8 Дана строка. Проверьте, начинается ли эта строка на 'http://'.

// let str = "http://code.mu/ru/javascript/book/prime/inbuilt/string/";
// console.log(str.indexOf("http://"));

// 79.9 Дана строка. Проверьте, заканчивается ли эта строка на 'http://'.
// console.log(str.indexOf("http://", -1));

// 79.12 Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.

// let str = "1-2-3-4-5";

// let result = str.split("-");
// console.log(result);

// 79.13 Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

// let str = "12345";
// let result = str.split("");
// console.log(result);

//  79.14 С помощью метода join слейте его в строку '1-2-3-4-5'.

// let arr = [1, 2, 3, 4, 5];
// let result = arr.join("-");
// console.log(result);

// 81 Практика на использования изученных методов. Регистр символов

// 81.1 Преобразуйте последнюю букву строки в верхний регистр.

// let str = "london";
// let result = str.slice(0, 5) + str.slice(5).toUpperCase();
// console.log(result);

// 81.2 Преобразуйте первые 2 буквы строки в верхний регистр.

// let str = "london";
// let result = str.slice(0, 2).toUpperCase() + str.slice(2);
// console.log(result);

// 81.3 Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:
// Преобразуйте первую букву строки в нижний регистр.

// let str = "London";
// let result = str.slice(0, 1).toLowerCase() + str.slice(1);
// console.log(result);

// 81.4
// let str = "word1 word2 word3";
// let words = str.split(" ");
// // console.log(words);

// for (let i = 0; i < words.length; i += 1) {
//   words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// }

// let result = words.join(" ");
// console.log(result);

// 81.5 Преобразуйте строку 'var_test_text' в 'VarTestText'.
// Написанный код должен работать для любых строк такого типа (то есть для строк, в которых слова разделены символов подчеркивания).

// let str = "var_test_text";
// let words = str.split("_");
// console.log(words);
// for (let i = 0; i < words.length; i += 1) {
//   words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// }
// let result = words.join("");
// console.log(result);

// 81.7
// let str = "12345";

// 1 вариант
// let result = str.split("").reverse().join("");
// console.log(result);

// 2 вариант

// let strNumbers = str.split("");
// let newArr = [];
// for (let i = strNumbers.length; i >= 0; i -= 1) {
//   newArr.push(strNumbers[i]);
// }
// let arr = newArr.join("");
// console.log(arr);
