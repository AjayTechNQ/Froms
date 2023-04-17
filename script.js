const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit);

let text1 = "HELLO WORLD";
let letter = text1.charAt(2);
console.log(letter);

let text2 = "HELLO";
let code1 = text2.charCodeAt(1);
console.log(code1);

let text3 = "HELLO WORLD";
let code2 = text3.codePointAt(1);
console.log(code2);

let text4 = "sea";
let text5 = "food";
let result = text4.concat(text5);
console.log(result);

let message = "Hello World!";
let text6 = message.constructor;
console.log(text6);

let text7 = "Hello world";
let result1 =  text7.endsWith("d");
console.log(result1);

let text8 = String.fromCharCode(66);
console.log(text8);

let text9 = "Hello world, welcome to the universe.";
let result2 = text9.includes("hi");
console.log(result2);

let text10 = "Hello world, welcome to the universe.";
let result3 = text10.indexOf("universe");
console.log(result3);

let text11 = "Hello planet earth, you are a great planet.";
let result4 = text11.lastIndexOf("earth");
console.log(result4);

let text12 = "Hello Wod!";
let length = text12.length;
console.log(length);

let text13 = "ab";
let text14 = "ytr";
let result5 = text13.localeCompare(text14);
console.log(result5);

let text15 = "The rain in SPAIN stays mainly in the plain";
let result6 = text15.match("ain");
console.log(result6);

let text16 = "5";
text16 = text16.padEnd(4,"0");
console.log(text16);

let text17 = "5";
text17 = text17.padStart(4,"0");
console.log(text17);

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}


let sum = 0;
const number1 = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number1;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number1) {
    console.log(`${number1} is an Armstrong number`);
}
else {
    console.log(`${number1} is not an Armstrong number.`);
}

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));

const num1 = 5;
const num2 = 3;

// add two numbers
const sum1 = num1 + num2;

// display the sum
console.log(sum1);