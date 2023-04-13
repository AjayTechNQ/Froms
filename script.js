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