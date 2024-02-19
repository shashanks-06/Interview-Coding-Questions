/*---- Reversing the string text ----*/

// by using "for of" loop
function caseReverseFor(text) {
  let caseRevText = "";

  for (const char of text) {
    if (char === char.toUpperCase()) {
      caseRevText += char.toLowerCase();
    } else {
      caseRevText += char.toUpperCase();
    }
  }
  return caseRevText;
}

const textF = "Hello World!, This Is The Great Shashank.";
const caseReverseText = caseReverseFor(textF);
console.log("By using for of loop : ", caseReverseText);

/* ------------------------------------------------------------ */

//By Using "map" method

function caseReverseMap(text) {
  return text
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

const textM = "Hello World!, This Is The Great Shashank.";
console.log("By Using map method : ", caseReverseMap(textM));
