{
  // console.log("\n" + "Select course");
// let x = prompt("Write MERN or FDR for course : ");
// let y = x.toUpperCase();
// if (y == "MERN") {
//   console.log("Course Duration is 1 Year");
// } else if (y == "FDR") {
//   console.log("Course Duration is 8 Months");
// } else {
//   console.log("Invalid Value");
// }

// console.log("\n \n" + "Your Grade");
// let number = parseInt(prompt("Enter a number"));
// switch (true) {
//   case number > 100 || number < 0:
//     console.log("Please, Enter a number from 1 to 100");
//     break;
//   case number >= 80:
//     console.log("A+");
//     break;
//   case number >= 70:
//     console.log("A");
//     break;
//   case number >= 60:
//     console.log("A-");
//     break;
//   case number >= 50:
//     console.log("B");
//     break;
//   case number >= 40:
//     console.log("C");
//     break;
//   case number >= 33:
//     console.log("D");
//     break;
//   case number < 33:
//     console.log("F");
//     break;
//   default:
//     console.log("Invalid Number");
// }

// console.log("\n" + "Map Method");
// // *Map Method
// let listItems = ["Banana", "Orange", "Apple", "Mango"];
// let result = listItems.map((value, index, nArray) => {
//   return value;
// });
// console.log(result);

// console.log("\n" + "Function Expression");
// //  *Function Expression
// let total = function (a, b) {
//   return a * b;
// };
// console.log(total(5, 10));

// console.log("\n" + "Arrow Function");
// // *Arrow Function
// let sum = () => {
//   console.log("This is arrow function");
// };
// sum();

// console.log("\n" + "For Loop");
// // *For loop
// for (let i = 0; i < listItems.length; i++) {
//   console.log(listItems[i]);
// }

// console.log("\n" + "function return");
// // *Function return
// function x(num1, num2) {
//   return num1 + num2;
// }
// let result1 = x(30, 20);
// console.log(result1);
// let result2 = result1 * 5;
// console.log(result2);
// let result3 = result2 / 5;
// console.log(result3);

// const courseList = { MERN: "01 Year", FDR: "08 Months" };
// const select = "s";
// for (const course in courseList) {
//   if(select === course){
//     console.log(courseList[course]);
//   }else{
//     console.log("Please, Write MERN/FDR");
//   }
// }

}
// *Access with TagName
// let h1 = document.getElementsByTagName("h1");
// console.log(h1[0]);

// *Access with ClassName
// let heading = document.getElementsByClassName("heading");
// console.log(heading[0]);

// *Access with Id
// let idHeading = document.getElementById("heading");
// console.log(idHeading);



// *Access with querySelector
// !tageName
// let select1 = document.querySelector("h1");
// !access className with dot (.)
// let select2 = document.querySelector(".heading");
// !access IdName with #
let select3 = document.querySelector("#heading");
console.log(select3);

// *Changing HTML tag content with innerHTML
let text = document.getElementsByTagName("p")[0];
console.log(text.innerHTML = "Dhaka is the capital city of Bangladesh.");
document.querySelector("p").innerHTML = "HTML";