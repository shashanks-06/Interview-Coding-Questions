function findDuplicates(str) {
  let strArray = str.split("");
  let duplicates = [];

  for (let i = 0; i < strArray.length; i++) {
    for (let j = i + 1; j < strArray.length; j++) {
      if (strArray[i] == strArray[j]) {
        duplicates.push(strArray[j]);
      }
    }
  }
  return duplicates;
}

const str = "shashank";
console.log(`Duplicate letter in '${str}' are ${findDuplicates(str)}`);
