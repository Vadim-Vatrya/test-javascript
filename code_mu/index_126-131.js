// 126

// 126.1
// function func(num1, num2, num3, num4, num5) {
//   return num1 + num2 + num3 + num4 + num5;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(func(...arr));

// 126.2
// function func(n1, n2, n3, n4, n5, n6, n7, n8) {
//   return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
// }

// console.log(func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]));

// 126.3
// let arr = [1, 2, 3, 4, 5];
// let min = Math.min(...arr);
// console.log(min);

//130

// 130.1 Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое (сумма делить на количество).

// function func(...rest) {
//   let sum = 0;

//   for (let num of rest) {
//     sum += num;
//   }

//   return sum / rest.length;
// }

// let result = func(1, 2, 3);
// console.log(result); // выведет 2

// 130.2
// function func(arr1, arr2, arr3) {
//   let result = [];
//   result.unshift(arr1, arr2, arr3);
//   return result;
// }
// let res = func([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(res);

// 130.3
// function func(arr1, arr2, arr3) {
//   let result = [];
//   let result1 = [];

//   result.unshift(arr1, arr2, arr3);
//   console.log(result);
//   for (let elem of result) {
//     for (let subElem of elem) {
//       result1.push(subElem);
//     }
//   }
//   return result1;
// }
// let res = func([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(res);
