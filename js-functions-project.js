// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max (num1, num2){

  if (num1 > num2)
{
    return num1;
} else
{
    return num2;
}
}
console.log(max (1, 10))

// evaluting skill levels

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){

    if (num1 > num2)
  {
      return num1;
  } else if (num2 > num3)
  {
      return num2;
  }
    else
  {
      return num3;
  }
  }
console.log(maxOfThree(25, 50, 100))

// sorting money

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if (char === 'a' || char === 'e' || char === 'i' || char ==='o' || char === 'u'){
    return true;
}
    else {
    return false;
}
}
console.log(isVowel('a'))

// wheel of fortune

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(a, b){
    return a + b;
}

console.log(sum(100, 200))

// math, spreadsheets


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(a, b, c){
    return (a + b + c)/3;
}
console.log(avg(20, 40, 60))


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.


function getLength(value){
    return (value.length)
    console.log(value.length)
}
getLength(Austin)


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan (num1, num2){

  if (num1 < num2)
{
    return true;
} else
{
    return false;
}
}
console.log(greaterThan (1, 10))




// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.


function greet (n){

    return (('Hello, ') + n + '!');
}
console.log(greet('Austin'))

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(a, b, c, d, e, f, g){
    return (a + b + c + d + e + f + g);
}

console.log(madlib("quick ", "brown ", "fox ", "jumps ", "over ", "the ", "fence"))
