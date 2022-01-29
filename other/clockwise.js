let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, 11];
function getArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
    console.log(sum);
  }
  return sum;
}

getArr([1, 2, [3, 4, 5, [6, 7], 8], 9, 10, 11]);
