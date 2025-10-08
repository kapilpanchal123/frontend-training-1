// import { apiKey } from "./util.js";
// import apiKey from "./util.js";

import * as util from "./util.js";

// console.log(util.apiKey1);
// console.log(util.apiKey2);
// console.log(util.default);

// const userMessage = "Hello World";

// console.log(userMessage);
// console.log(userMessage);

// greet();

// function greet() {
//   console.log("Hello!");
// }

// function greet(userName, message = "default message") {
//   console.log("Hello, ", userName);
//   console.log(message);
// }

// function createGreeting(userName, message = "default message") {
//   return "Hi, " + userName + " " + message;
// }

const createGreeting = (userName, message = "default message") => {
  return "Hi, " + userName + " " + message;
}

const results1 = createGreeting("username1", "how are you?");
console.log(results1);
const results2 = createGreeting("username2");
console.log(results2)