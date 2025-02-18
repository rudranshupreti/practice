// Write a JavaScript program to display the current day and time in the following format.  
// const today = new Date();
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const dayName = days[today.getDay()];
// let hours = today.getHours();
// const minutes = today.getMinutes();
// const seconds = today.getSeconds();
// const ampm = hours >= 12 ? "PM" : "AM";
// hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
// console.log(`Today is : ${dayName}.`);
// console.log(`Current time is : ${hours} ${ampm} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`);


// Write a JavaScript program to get the current date.  
// Expected Output :
// function getcDate() {
//   const Datet = new Date(); 
//   const day = String(Datet.getDate()).padStart(2, '0');  
//   const month = String(Datet.getMonth() + 1).padStart(2, '0');  // Adding 1 to get the correct month
//   const year = Datet.getFullYear();  // Corrected method name
//   const dateFormat1 = `${month}-${day}-${year}`;
//   const dateFormat2 = `${month}/${day}/${year}`;
//   // Format as dd-mm-yyyy and dd/mm/yyyy
//   const dateFormat3 = `${day}-${month}-${year}`;
//   const dateFormat4 = `${day}/${month}/${year}`;
//   // Output the results
//   console.log("mm-dd-yyyy:", dateFormat1);
//   console.log("mm/dd/yyyy:", dateFormat2);
//   console.log("dd-mm-yyyy:", dateFormat3);
//   console.log("dd/mm/yyyy:", dateFormat4); }
// getcDate();


// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
// function area (a,b,c){
//   let s = (a+b+c)/2;
//   let triangle = Math.sqrt(s * (s - a) * (s - b) * (s - c));  // Fixed the multiplication and square root calculation
//   return triangle }
// console.log(area(1,2,2))

// let str = "w3resources";
// function reverse (str){
//   let output = "";
//   for (let i = str.length-1;i>=0;i--){
//    output += str[i];
//   }


// // Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  
//   function leapy(year){
//     return (year % 100 ===0)?(year % 400===0):(year % 4 ===0)}
//   console.log(leapy());
  

// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  
// function sun() {
//   for (let year = 2024; year <= 2050; year++) {
//     let date = new Date(year, 0, 1); // Create date for 1st January of each year
//     if (date.getDay() === 0) { // 0 represents Sunday
//       console.log(year + ' has Sunday on January 1st.');
//     }
//   }
// }
// sun(); // Call the function without arguments
 

// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  
// let check = Math.floor(Math.random()*11)
// let pr = Number(prompt("please enter the value"))
// console.log(check===pr ? "you are write":`you are wrong real no is ${check}`)


// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  6
// let year = 2023;


// function sun(year) {
//     let date = new Date(year, 0, 1); // Create date for 1st January of the given year
//     if (date.getDay() === 0) { // 0 represents Sunday
//       console.log(year + " has Sunday on January 1st.");
//     } else {
//       console.log(year + " does NOT have Sunday on January 1st.");}
// }
// sun(year);


// Write a JavaScript program to calculate the days left before diwali.  
// let date = 23;
// function diwali (date){
//   const diwali2025 = new Date(2025, 9, 23); // October 23, 2025 (Month is 0-based)
//   if (diwali2025.getDate()=== date){
//     console.log(date+" is right date")
//   }
//   else{
//     console.log(date+"is not the write date ")
//   }
// }
// diwali(date)


// Write a JavaScript program to calculate multiplication and division of two numbers (input from the user). 
// function input (num1 , num2){
//   let sum = num1*num2;
//   let multi = num1+num2;
//   return [sum , multi]  
// }
// console.log(input(2,3))


// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
// function cel (num){
// return  (num * 9/5) + 32;
// }
// console.log(cel(45))


// Write a JavaScript program to get the website URL (loading page).  
// console.log(`${document.URL}`);


// Write a JavaScript exercise to create a variable using a user-defined name.  
// var var_name = 'abcd';
// var n = 120;
// this[var_name] = n;
// console.log(this[var_name]); 


// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference. 
// function cal(num){
//   if (num<=13){
//     return 13-num
//   }
//   else{
//     return(num-13)*2
//   }
// }
// console.log(cal(44))


// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum. 
// function sum(num1, num2,){
// let plus = num1+num2;
// if (num1===num2){
//   return plus+num1+num2
// }
// }
// console.log(sum(1,1))


// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19. 
//  function cal(num){
//     if (num<=19){
//       return 19-num}
//     else{
//       return(num-19)*2
//     }}
//   console.log(cal(44))


// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  
// function check(num1,num2){
//   let sum= num1+num2;
//   return num1 && num2 ===50|| sum ===50 ? true :false}
// console.log(check(1,1))


