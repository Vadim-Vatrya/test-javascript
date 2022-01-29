// let obj = {
//   employee1: 100,
//   employee2: 200,
//   employee3: 300,
//   employee4: 400,
//   employee5: 500,
//   employee6: 600,
//   employee7: 700,
// };

// for (let key in obj) {
//   console.log(obj[key]);
//   if (obj[key] <= 400) {
//     obj[key] += 0.1 * obj[key];
//   }
// }
// console.log(obj);

// let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };

// let sumKey = 0;
// let sumValue = 0;
// let node = 1;
// for (let key in obj) {
//   sumValue += obj[key];
//   sumKey += Number(key);
//   node = sumKey / sumValue;
// }

// console.log(sumKey, sumValue, node);

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let arr1 = [];
// let arr2 = [];

// for (let i = 0; i <= 4; i++) {
//   // arr1[i] = obj[key];
//   arr2[i] = obj.value;
// }
// console.log(arr1, arr2);

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let kub = 0;
// for (let i = 0; i < arr.length; i += 1) {
//   kub += arr[i] ** 2;
// }
// console.log(Math.sqrt(kub));

// // С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.
// function getDigitsSum(i) {
//   let sum = 0;
//   let digits = String(i).split("");

//   for (let digit of digits) {
//     sum += Number(digit);
//   }

//   return sum;
// }

// let res = [];

// for (let i = 1; i <= 2030; i += 1) {
//   if (getDigitsSum(i)) {
//     res.push(i);
//   }
//   // return res;
// }
// console.log(res);

// var arr = [5, -3, 6, -5, 0, -7, 8, 9];
// var result = arr.reduce(function(sum, elem) {
// 	return sum + elem;
// });

// let arr = [5, -3, 6, -5, 0, -7, 8, 9];
// let result = arr.reduce((sum, elem) => sum + elem, 0);
// console.log(result);
