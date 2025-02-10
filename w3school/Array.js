// const cars = [
//   "Saab",
//   "Volvo",
//   "BMW"]

// //   const cars2 = [];
// // cars[0]= "Saab";
// // cars[1]= "Volvo";
// // cars[2]= "BMW";

// // console.log(cars,cars2);

// // let moto = new Array("sub","but");
// // console.log(moto.toString());
// // console.log(cars);
// // console.log(typeof(cars));

// // console.log(cars.length);

// // access the for loop ;
// // access the property of array
// // const name = ['hell','hwvf','ihhbff'];
// // let txt = '';
// // for (let i =0; i< name.length; i++){
// //  txt +=name[i];
// // }

// // const hello = new Array (2384);
// // console.log(hello);

// // const points = new Array(40);
// // console.log(points);

// // console.log(Array.isArray(points));
// // console.log(points instanceof Array);

// // array object

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length);
// console.log(fruits.toString());
// console.log(fruits.at(3));
// console.log(fruits.join(' '));
// // console.log(fruits.pop("orange"),fruits)//it will remove the last element of array
// // console.log(fruits.push("hello"),fruits)
// console.log(fruits.shift());/// it will remove the frist element 
// console.log(fruits.unshift(hello));

// let f =  ['ujbf','edfgv','gfatg','aegg'];
// let g = ['jhfd','eardfxg']
// let h  =  f.concat(g);
// console.log(h);
// console.log(fruits.copyWithin(2,3,2));


// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);
 

// plice methos use to add new element in array 
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let e =fruits.splice( "Lemon", "Kiwi");

// console.log(e)
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);
// console.log(spliced);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice();
// console.log(citrus);

// const f = ['sf','awsg','awsdg','asd'];
// let g = f.sort();
// console.log(f);
// console.log(f.reverse());
// console.log(f.toSorted());
//The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
 
// const points = [40, 100, 1, 5, 25, 10];
// let a= points.sort(function(a, b){return a - b});
// console.log(a);// array sort number pe kaam nhi krt kyoki vo string pe kaam krta he ishilye ham ye methos use krte he number ko sort krne ke liya 

// let arr = [,23,4,4,3,3,4,];
// function myArrayMin(arr) {
//   return Math.max.apply(arr);
// }

// console.log(myArrayMin());
// function myArrayMin(arr) {
//   let len = arr.length;
//   let min = Infinity;
//   while (len--) {
//     if (arr[len] < min) {
//       min = arr[len];
//     }
//   }
//   return min;
// }

// console.log(myArrayMin(arr));


// const numbers = [12,3,4,5,3,5];
// let txt = '';
// numbers.forEach(myFunction);
// function myFunction(value){
//   txt += value + " ";
// }

// console.log(txt);

// const number = [1,2,3,4,4,5];
// let txt = '';
// number.map(myfunction);
// function myfunction(value){
//   return value; 
// }


// const number = [ 1,2,3,4,4,5];
// let n = number.filter(myFuntion);

// function myFuntion(value){
//   return value<2;
// }
// console.log(n);

// const number =[ 1,2,3,4,42,44,'AEFG',// it will convert all the value of array to single array 
// ];
// let r =  number.reduce(myFuntion);
// function myFuntion(total,value,index,array){
//   return total + value;

// }
// console.log(r);

// let r =  number.reduceRight(myFuntion);
// function myFuntion(total,value,index,array){
//   return total + value;

// }
// console.log(r);
 

// const numbers = 'ssfcasfc';
// // let someOver18 = numbers.some(myFunction);

// // function myFunction(value, index, array) {
// //   return value > 18;
// // }

// // console.log(someOver18);numbers
// const my = Array.from(numbers);
// console.log(my);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const keys = fruits.keys();
// let text = "";
// for (let x of keys) {
//   text += x + ' ';
// }

// console.log(text);
//entries method
// const f =  ['eee','wsdf','wsf'];
// const r =  f.entries();
// let i = '';
// for (let x of r){
//   i += x+' ';
// }

// console.log(i);
//spread method
// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// console.log([...q1,...q2]);

// error when we reassin the same array
// const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"]; 
// console.log(cars);
// Uncaught TypeError: Assignment to constant variable.
// we can redeclear the element but not array

// var cars = ["Volvo", "BMW"];     // Allowed
// const cars = ["Volvo", "BMW"];   // Not allowed
// {
//   var cars = ["Volvo", "BMW"];   // Allowed
//   const cars = ["Volvo", "BMW"]; // Not allowed
// // }
