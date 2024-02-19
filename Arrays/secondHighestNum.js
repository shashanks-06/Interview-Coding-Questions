function secondHighestNum(arr) {
  let sortedArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = 0;

      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    sortedArr.push(arr[i]);
  }
  return sortedArr[1];
}

const arr = [1, 2, 3, 4, 5];

console.log(secondHighestNum(arr));
