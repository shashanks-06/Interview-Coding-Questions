// Checking prime of one no.
let num = 11;
let count = 0;

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    count++;
  }
}

if (count === 2) {
  console.log(`${num} is prime no.`);
} else {
  console.log(`${num} is not prime no.`);
}
