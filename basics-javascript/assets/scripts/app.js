// import { apiKey } from "./util.js";
// import apiKey from "./util.js";
// import * as util from "./util.js";

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

// const createGreeting = (userName, message = "default message") => {
//   return "Hi, " + userName + " " + message;
// }

// const results1 = createGreeting("username1", "how are you?");
// console.log(results1);
// const results2 = createGreeting("username2");
// console.log(results2)

// const user = {
//   name: "usernameObject",
//   message: "hello from user message object",
//   greet() {
//     console.log("Hello from greet");
//     console.log(this.name);
//   }
// };

// console.log(user);
// console.log(user.name);
// console.log(user.greet());

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hello from class");
//   }
// }

// const user1 = new User("username1", 10);
// console.log(user1);

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");

// const index = hobbies.findIndex((item) => {
//   return item === "Sports";
// });

// console.log(index);

// const newHobbies = hobbies.map((item, index) => {
//   return (item + "!");
// });
// console.log(newHobbies);

// const newHobbiesObject = hobbies.map((item, index) => {
//   return ({
//     index: index,
//     text: item,
//   });
// });
// console.log(newHobbiesObject);


// const [firstname, lastname] = ["firstname", "lastname"];

// console.log(firstname);
// console.log(lastname);

// const {name, age} = {
//   name: "firstname lastname",
//   age: 10,
// }

// console.log(name);
// console.log(age);

// const hobbies = ["Sports", "Cooking", "Reading"];
// const newHobbies = ["Working"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const user = {
//   name: "usernameObject",
//   message: "hello from user message object",
// };

// const extendedUser = {
//   isAdmin: true,
//   ...user
// }

// console.log(extendedUser);

// const password = prompt("Your Password");

// if(password === "Hello") {
//   console.log("Hello Works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access Not Granted!");
// }

// const hobbies = ["Sports", "Cooking", "Reading"];

// for(const hobby of hobbies) {
//   console.log(hobby);
// }


// const list = document.querySelector("ul");
// list.remove();