/*----Differentiating UpperCase and LowerCase ----*/
function diffCases(text) {
  let lowerCase = "";
  let upperCase = "";

  for (const char of text) {
    if (char.toUpperCase() === char) {
      upperCase += char;
    } else {
      lowerCase += char;
    }
  }
  return { upperCase, lowerCase };
}

const text = "hello world I AM SHASHANK";
const { upperCase, lowerCase } = diffCases(text);

console.log("Upper Case: " + upperCase);
console.log("Lower Case: " + lowerCase);
