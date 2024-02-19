function reverseString(text) {
  let reverseStr = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reverseStr += text.charAt(i);
  }
  return reverseStr;
}

let text = "Hello World!, This Is The Great Shashank.";

console.log("Original String : ", text);
console.log("Reversed String : ", reverseString(text));
