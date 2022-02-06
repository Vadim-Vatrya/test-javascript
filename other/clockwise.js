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

// let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, 11];
// function fillArr(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     // console.log(arr[i]);
//     if (arr[i].isNumber) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// fillArr([1, 2, [3, 4, 5, [6, 7], 8], 9, 10, 11]);

// function func(prevPrevNum, prevNum) {
//   let current = prevPrevNum + prevNum;
//   console.log(current);
//   if (current <= 1000) {
//     func(prevNum, current);
//   }
// }

function func(prevPrevNum, prevNum) {
  let result = [];
  function func1(prevPrevNum, prevNum) {
    let current = prevPrevNum + prevNum;
    result.push(current);
  }
  console.log(func1(prevPrevNum, prevNum));
}
func(1, 2);
