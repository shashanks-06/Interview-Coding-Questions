function findGcdLcm(a, b) {
  let g = 0;

  for (let i = 1; i <= a; i++) {
    if (a % i === 0 && b % i === 0) {
      g = i;
    }
  }
  console.log(`GCD of ${a} to ${b} is ${g}`);

  let l = (a * b) / g;
  console.log(`LCM of ${a} to ${b} is ${l}`);
}

findGcdLcm(50, 60);
