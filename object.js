// object 
// const car = {
//   type: "Fiat",
//   name:"Punto",
//   color: "white",
// }

// console.log(car.color);


// we have four type to creat a object in javascript

// 1. object literal
// const ncar ={
//   type:"flat",
//   name:"punto",
//   color:"white"
// }

// console.log(car.color);

// Uncaught SyntaxError: Identifier 'car' has already been declared (at 27jan.js:14:7

// const student ={
//   name:"shubham",
//   Class:"12th",
//   rollno:"1234",}

//   console.log(student.name);

  
// 2. object constructor  
// let bike = new Object();
// bike.type = "Honda";
// bike.name = "Activa";

// console.log(bike.name);


// 3. object.create() 
// const car1 = Object.create(car);
// console.log(car1.color);


// const Namecar = {
//   type: "Fiat",
//   name:"Punto",
//   color: "white",
// };

// console.log(Namecar.color);
// 4. function constructor
// function Car(type,name,color){
//   this.type = type;
//   this.name = name;
//   this.color = color;
//   console.log(this.type);
// }





// const person = new Object();use upper case jab object likhnte hai small case me define nhi hota vo function ban jata hai
// person.type ="flat";

// console.log(person.type);


// object access kanr ke liye 2 tarike hai 

// 1. dot notation
// const name = {
//   type:"flat",
//   name:"punto",
//   color:"white"
// };

// console.log(name.type);

// 2. bracket notation

// const name = {
//   type:"flat",
//   name:"punto",
//   color:"white"
// }
//  console.log(name['type']);

//  console.log(name['type']);


// const person ={
//   firstName :"shubha",
// rollno:"1243",

// fullname : function (){return this.firstName+" "+this.rollno;}
// }

// console.log(person.fullname());



// object are immutable in javascript hame unki value change kr skte he Ager hamne unhe const me define kiya hai to bhi unki value change ho skti hai
// const hello = {
//   type:"flat",
//   name:"punto",
//   color:"white"
// };
// // copy the object 
// const hello1 = hello;
// // it can chnage the both value
// hello1.color = "red";



// const hcar = {
//   brand: 'Volvo',
//   model: 'EX90',
//   drive: function() {
//     return true;
//   }
// };

// console.log(hcar.drive());

// add the new peroperti and the value in onbject 
// const hcar = {
//   brand: 'Volvo',
//   model: 'EX90',
//   drive: function() {
//     return true;
//   }
// };

// hcar.color = 'red';
// console.log(hcar.color);

// delete the property from the object

// delete hcar.model;
// console.log(hcar);

// nest object 
// const person = {

//   name :{
//     firstName :"rudransh",
//     lastName:"upreti",

//   },
//   age:"39",
//   rollno:"1234",
// }
// we can also access by [][];
// console.log(person['name']['firstName']);


// object method acess 

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const x = person.fullName();

// console.log(x);


// object constructor
// function person(firstname,lastname,age,eyecolor){
// this.firstname = firstname;
// this.lastname = lastname;
// this.age = age;
// this.eyecolor = eyecolor;
// }

// const myfather = new person("john","doe",50,"blue");
// const mymother = new person("sally","rally",48,"green");

// console.log(myfather);
// console.log(mymother);
// console.log(myfather.firstname);


// get ans in lawercase
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function() {
//     return( this.firstName + " " + this.lastName).toLowerCase();
//   }
// }

// console.log(person.fullName());

// we have 4 method to show the object in javascript

// display the object by Stringay the object by String


// const person ={
//   firstName:"John",
//   lastName:"Doe",
//   age:50,
//   eyeColor:"blue",
//   fullName: function(){
//     return this.firstName+" "+this.lastName;
//   }
// }

// console.log(person.fullName());


// object reprent by loop


// const person ={
//   firstName:"John",
//   lastName:"Doe",
//   age:50,
//   eyeColor:"blue",
  // fullName: function(){
  //   return this.firstName+" "+this.lastName;
  // }
// }

// let text = "";
// for (let x in person){
//   text += person[x]+" ";
// };

// console.log(text);
 
// object represet by array

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   }
// const  myArray = Object.values(person);
// console.log(myArray);


// using entries method
// in this method object ki name or jab usse call krte he uska name alalg hota he 
// const fruits = {Bananas:300, Oranges:200, Apples:500};

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {
//   text += fruit + ": " + value + "<br>";
// }
// console.log(text);



// let myString = JSON.stringify(fruits);
//  console.log(myString);



// console.log(+true);

// console.log(+'123');


// function r(){
//   var i = 1;
//   setTimeout(function(){
//     console.log("i");}
//   ,1000);
//   console.log("learn");
// }
// r();

// for (const i=1; i<=5;i++){
//   setTimeout(()=>console.log(i),1000)
// } it will show syntax error

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for (var i = 1; i <= 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// JavaScript Object Constructors

// function person(first, last) {
//   this.firstname = first;
//   this.lastname = last;
// }

// const myfather = new person("John", "Dotter");

// // Add a property to the instance
// myfather.nationality = "Hindi";

// console.log(myfather); // Logs: { firstname: 'John', lastname: 'Dotter', nationality: 'Hindi' }


// // to add new propert in object 

// person.prototype.nationality ="hindu";



function person( first,last,age){
  this.fistname=first;
  this.lastname= last;
  this.age=age;

}

const father = new person("rudran","upreti",33);
father.changeName = function(name){
  this.lastName = name;
}

father.changeName("rudrasnh");

console.log(father);