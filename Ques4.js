// Question 3:
/*Write a program to print the first 100 prime numbers. */

let count = 0;
for (let i = 2; ; i++) {
  let flag = 0;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    count++;
    console.log(count + ")", i);
  }

  if (count > 99) {
    break;
  }
}

// ==================================================================
