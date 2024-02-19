/*---- In Build Method ---- */
// let arr1 = [56, 90, 21, 76, 13];

// console.log(arr1.sort());

/*---- Let's Method ---- */

function sortArr(arr) {
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = 0;

      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    sortedArr.push(arr[i]);
  }
  return sortedArr;
}

const arr = [67, 223, 65, 76, 23, 2, 90, 34];

console.log(sortArr(arr));
