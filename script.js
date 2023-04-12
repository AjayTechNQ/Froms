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

