// function myFirst() {
//   return("Hello");
// }

// function mySecond() {
//   return("Goodbye");
// }

// console.log(mySecond());
// console.log(myFirst());


// function hello (some){
//   console.log(some)
// }
// function greet(name, callback) {
//   console.log("Hello, " + name);
//   callback()
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet("Dyang", sayGoodbye);

// function fechData(callback){
//   setTimeout( () => {
//     console.log("Data recieved");
//     callback();
//   },4000)
// }

// function hello(){
//   console.log("kese ho ap")

// }


// fechData(hello);

// let t = setTimeout(myhello, 2000);
// function myhello(){
//   console.log("hello gain ..?")
// }

// console.log(t)


// let g = setInterval(hello2,3000);
// function hello2(){
//   let d = new Date;
//   console.log( d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds())
// }

// console.log(g);


// let x = "5";
// let e = -true;
// console.log(e);

// console.log(sayHello());
// function sayHello() {
//   console.log('Hello!');
// }

// var sayHello = function() {
//   console.log('Hi!');
// };

// const arrStr = [
//   "    i aM     RudrAnsh. ",
//   "    i aM     AnkusH. ",
//   "    I aM     LaxmI. ",
// ];




// function amit (arr) {
//   return(
//     arr
//     .trim()
//     .replace(/\s+/g," ").split(" ")
//     .map(word => (word).charAt(0).toUpperCase()+word.slice(1).toLowerCase())
//     .join(" ")
    
//          );
// }

// const result =
// arrStr.map(str=>{return amit(str)});

// console.log(result);

// const arr=[1,2,3,4,1,2,34,5,62,3,5,6];
// const newArr =[...new Set(arr)]

// const result=[];
// for(let a of newArr ){ 
//   if(a%2===0){
//     result.push("even");
//   }else{
//     result.push("odd")
//   }
  
// }

// console.log(result)


function myDisplayer(some){
  console.log(some)
}
async function myFunction(){
  return "hello";
}


myFunction().then(
  function(value){myDisplayer(value);},
  function(error) {myDisplayer(error);},
);

console.log()

