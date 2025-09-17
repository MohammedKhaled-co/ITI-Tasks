// Java Script Task 1
// Q1 in HTML



// Q2
// let x = 5;
// x=x.toString()
// console.log(x,typeof(x))

// Q3
// let x = window.prompt("Enter First Number!")
// let y = window.prompt("Enter Second Number!")
// function sum(x,y){
//     return x+y;
// }
// console.log(sum(parseInt(x),parseInt(y)))

// Q4
// let x = window.prompt("Enter First Number!")
// if(x>0){
//     console.log("This Number is Positive!")
// }
// else if(x<0){
//     console.log("This Number is Negative!")
// }
// else{
//     console.log("This Number is Zero!")
// }

// Q5
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// Q6
// for(let i=10;i>=1;i--){
//     console.log(i);
// }

// Q7
// let color = window.prompt("Enter Your Favorite Color")
// switch(color){
//     case "red":
//         console.log("red");
//         break;
//     case "green":
//         console.log("green")
//         break;
//     default:
//         console.log("other")
//         break;  
// }

// Q8
// let x = 5%0;
// console.log(x);
// let y = null;
// console.log(y)
// z = 
// console.log(typeof(z))

// Q9
//  let x = window.prompt("Enter String");
 
// function parse (x){
//     x=parseInt(x);
//     console.log(x,typeof(x));
   
//  }
// parse(x);

// Q10
// const obj={
//     name: "Mohammed",
//     id:29890,
//     age: 18
// }
// console.log(obj.gender) //undefined

// Q11
// function multi(x,y){

// }

// console.log(multi(4,7)) //undefined

// Q12
// let x = window.prompt("Enter Number!")
// if(x%2==0){
//     console.log("number is even")
//     if(x>0)
//     {
//         console.log("and positive")
//     }   
// }

// Q13
// let temp=0;
// for(let i=1;i<=100;i++){
//     temp+=i
// }
// console.log(temp);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Js Task2 
// Q1

// function checkNumber(num) {
//     if (num > 0) {
//         return "Positive";
//     } else if (num < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }
// let x= checkNumber(5);
// console.log(x);
// let y= checkNumber(-1);
// console.log(y);
// let z= checkNumber(0);
// console.log(z);

// Q2
// function askConfirmation() {
//     if (confirm("Do you want to proceed?")) {
//         alert("You chose to proceed");
//     } else {
//         alert("Action canceled");
//     }
// }
// askConfirmation();

// Q3
// var num = 10;
// var result = (num % 2 === 0) ? "hi" : "hello";
// console.log(result);

// Q4
// function validateAge() {
//     let age;
//     do {
//         age = prompt("Enter your age:");
//         if (age === null) break;
//         age = parseInt(age);
//         if (age > 0) {
//             if (age >= 1 && age <= 10) alert("Child");
//             else if (age >= 11 && age <= 18) alert("Teenager");
//             else if (age >= 19 && age <= 50) alert("Grown up");
//             else alert("Old");
//         }
//     } while (age === null || age <= 0);
// }
// validateAge()

// Q5
// function countVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     return str.split('').filter(char => vowels.includes(char)).length;
// }
// console.log(countVowels("dwloldmupmkm"))

// Q6
// function convertTo12Hour() {
//     const hour24 = parseInt(prompt("Enter hour (0-23):"));
//     if (hour24 === 0) return "12AM";
//     else if (hour24 < 12) return hour24 + "AM";
//     else if (hour24 === 12) return "12PM";
//     else return (hour24 - 12) + "PM";
// }
// console.log(convertTo12Hour());

// Q7
// function capitalizeFirst() {
//     const str = prompt("Enter a string:");
//     if (str && str.length > 0) {
//         const result = str.charAt(0).toUpperCase() + str.slice(1);
//         alert("Result: " + result);
//     }
// }
// console.log(capitalizeFirst())

// Q8
// function chooseColor() {
//     const color = prompt("What's your favorite color?");
//     if (confirm("You chose " + color + ". Is that correct?")) {
//         alert("Great choice!");
//     } else {
//         alert("Let's try again.");
//     }
// }
// console.log(chooseColor())

// Q9
// function validatePassword() {
//     const correctPassword = "secret123";
//     let password;
//     while (password !== correctPassword) {
//         password = prompt("Enter password:");
//         if (password === null) break;
//     }
//     if (password === correctPassword) alert("Access granted!");
// }

// Q10
// To compare dates in JavaScript:
// const date1 = new Date('2023-01-15');
// const date2 = new Date('2023-02-20');
// if (date1 < date2) console.log('date1 is earlier');
// else if (date1 > date2) console.log('date1 is later');
// else console.log('dates are equal');

// Q11
// function daysBetweenDates(date1, date2) {
//     const oneDay = 24 * 60 * 60 * 1000;
//     return Math.abs((date2 - date1) / oneDay);
// }

// // Q12
// function sumEvenNumbers() {
//     let sum = 0;
//     for (let i = 2; i <= 100; i += 2) {
//         sum += i;
//     }
//     return sum;
// }

// Q13
// To extract "World" from "Hello World!":
// const str = "Hello World!";
// const extracted = str.substring(6, 11); // or str.slice(6, 11)
// console.log(extracted); // "World"

// Q14
// To round 5.678 to 2 decimal places:
// const num = 5.678;
// const rounded = Math.round(num * 100) / 100; // or num.toFixed(2)

// Q15
// function isDivisibleBy3And5(num) {
//     return (num % 3 === 0 && num % 5 === 0) ? true : false;
// }










