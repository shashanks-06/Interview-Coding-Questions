function findDuplicateElements(arr) {
  let dupArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1] && arr[i + 1] != arr[i + 2]) {
      dupArray.push(arr[i]);
    }
  }
  return dupArray;
}

let arr = [1, 2, 2, 3, 3, 3, 4, 5, 5, 5];
console.log(findDuplicateElements(arr));
