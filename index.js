// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223

// function clickMe() {
//     var input = document.getElementById("input");
//     input = input.value;
//     var div = document.getElementById("div");

//     input = input.split("").reverse().join("");
//     div.innerHTML = input;
// }



// 2. Write a JavaScript function that checks whether a passed string is palindrome or not ?// A palindrome is wophrase, or sequence that reads the same backward as forward, e.g., madam, radar or level.

//     function clickMe() {
//         var input = document.getElementById("input");
//         var div = document.getElementById("div");
//         input = input.value;

//         var reverse = input.split("").reverse().join("");

//         if (input === reverse) {
//             div.innerHTML = "Your Word is Same Backword as Forword";
//         }
//         else {
//             div.innerHTML = "Your Word is Not Same Backword as Forword";
//         }
//     }



// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d,do, dog, o, og, g

// function clickMe() {
//         var input = document.getElementById("input");
//         input = input.value;
//         input = input.split("");
//         var div = document.getElementById("div");
//         var combinations = [];
//         for (let i = 0; i < input.length; i++) {
//             for (let j = i + 1; j < input.length + 1; j++) {
//                 combinations.push(input.slice(i, j));
//             }
//         }
//         div.innerHTML = combinations.toString().replaceAll(",", " ");
//     }



// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// function clickMe() {
//     var input = document.getElementById("input");
//     input = input.value.split("");
//     var div = document.getElementById("div");
//     var arr = "!@#$%^&*()1234567890_+-={}[]|(\\)';:.,><?/'".split("");

//     var num = 0;
//     for (var i = 0; i < input.length; i++) {
//         for (var j = 0; j < arr.length; j++) {
//             if (arr[j] === input[i]) {
//                 num++;
//             }
//         }
//     }
//     if (num === 0) {
//         div.innerHTML = input.sort();
//     } else {
//         div.innerHTML = "Only Letters Are Allowed";
//     }
// }



// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

// function clickMe() {
//     var input = document.getElementById("input");
//     input = input.value.split(" ");
//     var div = document.getElementById("div");

//     for (var i = 0; i < input.length; i++) {
//         input[i] = input[i][0].toUpperCase() + input[i].slice(1);

//     }
//     console.log(input.join(" "));

// }



// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'

// function clickMe() {
//     var input = document.getElementById("input");
//     input = input.value.split(" ");
//     var div = document.getElementById("div");

//     input = input.sort(function (a, b) {
//         return a.length - b.length;
//     }
//     );
//     div.innerHTML = input[input.length - 1];
// }



// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Example string: 'The quick brown fox'
// Expected Output: 5

// function clickMe() {
//     var input = document.getElementById("input");
//     input = input.value.split("");
//     var div = document.getElementById("div");

//     var Vowels = ["a", "e", "i", "o", "u"];
//     var num = 0;
//     for (var i = 0; i < input.length; i++) {
//         for (var j = 0; j < Vowels.length; j++) {
//             if (Vowels[j] === input[i]) {
//                 num++;
//             }
//         }

//     }

//     div.innerHTML = "Number Of Vowels is " + num;
// }



// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
//     Note : A prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// function clickMe() {
//     var input = document.getElementById("input");
//     input = +input.value;
//     var div = document.getElementById("div");

//     var val = true;

//     if (input > 1) {

//         for (var i = 2; i < input; i++) {
//             if (input % i === 0) {
//                 val = false;

//             }

//         }

//         if (val) {
//             div.innerHTML = input + " is Prime Number";
//         } else {
//             div.innerHTML = input + " is Not Prime Number";
//         }
//     } else {
//         div.innerHTML = input + " is Less Than 1"
//     }

// }



// 9. Write a JavaScript function which accepts an argument and returns the type.
//     Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// function findTypeOf(arg) {
//     return typeof (arg);
// }

// var type = findTypeOf(123);
// console.log(type);


// 10. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1, 2, 3, 4, 5]
// Expected Output: 2, 4

// function clickMe() {
//     var input = document.getElementById("input");
//     input = input.value.split("");
//     var div = document.getElementById("div");

//     var find = [];
//     for (var i = 1; i < input.length; i += 2) {
//         find.push(input[i]);
//     }
//     div.innerHTML = find;
// }




