"use strict";

// write your code here
/* #### 1. Color Analyzer
Create a switch statement that prints a different statement for each color option. (red, blue, green, yellow).
##### create a variable called `color` and print the following if `color`:
    -   "red" => print "Q1: Red's a great color on you."
    -   "blue" => print "Q1: Blue? Great choice."
    -   "green" => print "Q1: Ok. Green it is."
    -   "yellow" => print "Q1: Not what I would have picked, but yellow is fine."
    -   if the value in none of the above => print "Q1: The aim of the game is to pick a color." */

let color = "yellow"; // red, blue, green, yellow

switch (color) {
  case "red":
    console.log(`Q1: Red's a great color on you.`);
    break;
  case "blue":
    console.log(`Q1: Blue? Great choice.`);
    break;

  case "green":
    console.log(`Q1: Ok. Green it is.`);
    break;

  case "yellow":
    console.log(`Q1: Not what I would have picked, but yellow is fine.`);
    break;

  default:
    console.log(`Q1: The aim of the game is to pick a color.`);
}

/* #### 2. Grading
    Create a switch statement that prints different comments depending on a grade.
    ##### create a variable called `grade` and print the following if `grade`:
        -   "A" => print "Q2: A - Well done!"
        -   "B" => print "Q2: B - Good on you!"
        -   "C" => print "Q2: C - Good effort"
        -   "D" => print "Q2: D - Try harder next time..."
        -   if the value is none of the above => print "Q2: Yikes..." */

let grade = "C";

switch (grade) {
  case "A":
    console.log(`Q2: A - Well done!`);
    break;
  case "B":
    console.log(`Q2: B - Good on you!`);
    break;
  case "C":
    console.log(`Q2: C - Good effort`);
    break;
  case "D":
    console.log(`Q2: D - Try harder next time...`);
    break;
  default:
    console.log(`Q2: Yikes...`);
}
/* #### 3. Fruits
    Create a switch statement that prints different statement for various fruit (banana, orange, strawberry, apple).
    ##### create a variable called `fruit` and print the following if `fruit`:
        -   "apple" => print "Q3: An apple a day keeps the doctor away."
        -   "banana" => print "Q3: Bananas are full of potassium."
        -   "orange" => print "Q3: Yep, oranges. Great choice."
        -   "strawberry" => print "Q3: Mmmm...nothing better than strawberries."
        -   if the value is none of the above => print "Q3: PICK A FRUIT" */

let fruit = "strawberry";

switch (fruit) {
  case "apple":
    console.log(`Q3: An apple a day keeps the doctor away.`);
    break;
  case "banana":
    console.log(`Q3: Bananas are full of potassium.`);
    break;
  case "orange":
    console.log(`Q3: Yep, oranges. Great choice.`);
    break;
  case "strawberry":
    console.log(`Q3: Mmmm...nothing better than strawberries.`);
    break;
  default:
    console.log(`Q3: PICK A FRUIT`);
}

/* #### 4. Percentage Complete. 
    ##### create a variable called `percentageComplete` and print the following if `percentageComplete`:
    * If percentageComplete is below 30, print "Q4: Still a long way to go". 
    * If the percentageComplete is between 30 and 50, print "Q4: Slowly getting there". 
    * If percentageComplete is between 51 and 80, print "Q4: You can do it!". 
    * If percentageComplete is between 81 and 99, print "Q4: This is the last push!".
    * If percentageComplete is 100, print "Q4: You're there. Well done!". */

let percentageComplete = Math.ceil(Math.random() * 100);
if (percentageComplete < 30) {
  console.log(`Q4: Still a long way to go`);
} else if (percentageComplete >= 30 && percentageComplete <= 50) {
  console.log(`Q4: Slowly getting there`);
} else if (percentageComplete >= 51 && percentageComplete <= 80) {
  console.log(`Q4: You can do it!`);
} else if (percentageComplete >= 81 && percentageComplete <= 99) {
  console.log(`Q4: This is the last push!`);
} else {
  console.log(`Q4: You're there. Well done!`);
}

/* ### Switch case OR If statement
 * When should you use a switch statement versus an `if else` statement. Comment your answer in your js file. */

//Switch is an alternative way of writing complicated if-else statement. help to select from different options and used basically for configuration purposes. like if the language of the page should be english, german or any other language

//if-else we use to test an expression or boolean value


///////////////////////

"use strict";

/* 1. **Addition.** 
Write a program to add up the numbers 1 to 20.
 */

let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i;
}
console.log(`1: ${sum}`);
/* 
2. **There are i bottles of beer on the wall.** 
Write a program that will output, "There is 1 bottle of beer on the wall." "There are 2 bottles of beer on the wall" up until there are five bottles.  */

for (let i = 1; i <= 5; i++) {
  console.log(`2: There are ${i} bottles of beer on the wall`);
}

/* 3. **The odd/even reporter.**
Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even"). */

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`3: The ${i} is EVEN`);
  } else {
    console.log(`3: The ${i} is ODD`);
  }
}

/* 4. **Multiplication Tables.**
Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
**Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
 */

for (let i = 0; i <= 10; i++) {
  console.log(`4-a: ${i} * 9 = ${i * 9}`);
}

console.clear();

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`4-BONUS: ${j} * ${i} = ${j * i}`);
  }
  console.log(`-------------`);
}

/* 5. **Fizz Buzz**
Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". */

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`5:(${i}) : FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`5:(${i}) : Fizz`);
  } else if (i % 5 === 0) {
    console.log(`5:(${i}) : Buzz`);
  } else {
    console.log(`5:(${i})`);
  }
}

/* 6. **Sum of Multiples**
Write a program to add the multiples of 3 and 5 under 1000. */

let sumOfMultiples = 0;

for (let i = 0; i <= 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sumOfMultiples += i;
  }
}

console.log(sumOfMultiples);

/* 7. Write programs that produce the following outputs: 
>100 200 300 400 500 600 700 800 900 1000
>
>0 2 4 6 8 10
>
>3 6 9 12 15
>
>9 8 7 6 5 4 3 2 1 0
>
>1 1 1 2 2 2 3 3 3 4 4 4
>
>0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 */

let myString1 = "";

for (let i = 100; i <= 1000; i += 100) {
  myString1 += i + " ";
}
console.log(`>${myString1}`);
console.log(`--------------`);
let myString2 = "";
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    myString2 += i + " ";
  }
}
console.log(`>${myString2}`);
console.log(`--------------`);
let myString3 = "";

for (let i = 3; i <= 15; i++) {
  if (i % 3 === 0) {
    myString3 += i + " ";
  }
}

console.log(`>${myString3}`);

console.log(`--------------`);
let myString4 = "";
for (let i = 9; i >= 0; i--) {
  myString4 += i + " ";
}

console.log(`>${myString4}`);
console.log(`--------------`);
let myString5 = "";

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 3; j++) {
    myString5 += i + " ";
  }
}
console.log(`>${myString5}`);

console.log(`--------------`);
let myString6 = "";

for (let i = 1; i <= 3; i++) {
  for (let j = 0; j <= 4; j++) {
    myString6 += j + " ";
  }
}
console.log(`>${myString6}`);

/* 8. **isPalindrome.**
Write a program to check whether a word is a palindrome or not. 
Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat */

let myLetter = "madam";
let revLetter = myLetter.split("").reverse().join("");

if (myLetter === revLetter) {
  console.log(`${myLetter} is palindrome`);
} else {
  console.log(`${myLetter} is NOT palindrome`);
}
