// Question 4
/* Consider one integer array. Update the array as per the following requirements:
  - If the element is negative number then make the square of the number
  - Keep the 0 as is
  - If the number is positive even number then add the same even number to that
  - If the number is positive odd number then print the next odd number to that
  Ex. {0, 13, 5, -4, 6} --> {0, 15, 7, 16, 12} */

// Program:-

// Let the array be:-
let arr = [0, 13, 5, -4, 6];
let len = arr.length;
let resultArr = [];
for (let i = 0; i < len; i++) {
  // Condition for +ve number
  if (arr[i] > 0) {
    // condition for +ve even number (Doubling ir)
    if (arr[i] % 2 == 0) {
      resultArr[i] = 2 * arr[i];
    } else {
      // If the number is +ve odd then adding 2 to it
      resultArr[i] = arr[i] + 2;
    }
    // If the number is zero then keeping it the same
  } else if (arr[i] == 0) {
    resultArr[i] = arr[i];
    // If the Number is -ve, then squaring it.
  } else {
    resultArr[i] = arr[i] * arr[i];
  }
}

console.log(resultArr);
// Output: [0, 15, 7, 16, 12]
// ============================================================
