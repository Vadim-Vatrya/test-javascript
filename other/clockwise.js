let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, 11];
function fillArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    // console.log(arr[i]);
    if (arr[i].isNumber) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
fillArr([1, 2, [3, 4, 5, [6, 7], 8], 9, 10, 11]);
