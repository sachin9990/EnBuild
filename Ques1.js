// Question 1:
/*Render the Triangle for the given character and number of rows. That means if input character is D and number of rows are 4 then pyramid will be:

 D
 D E
 D E F
 D E F G */

// Program:

// Taking the input from user in any case upper or lowercase
let input = prompt("Please enter an alphabet");
// Converting the input String to uppercase and getting the ASCII code
let result = input.toUpperCase().charCodeAt(0);
// As capital cases in ASCII starts from 65 so removing all the previous values to get the index of alphabets starting from 1.
let limit = result - 64;

for (let i = 1; i <= limit; i++) {
  let alphabet = result;
  for (let j = 1; j <= i; j++) {
    document.write(String.fromCharCode(alphabet) + "&nbsp;");
    alphabet++;
  }
  document.write("<br>");
}

/*RESULT

Input: e

Output:
E 
E F 
E F G 
E F G H 
E F G H I 
*/

/*================================================================= */
