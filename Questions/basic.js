
// // 1.
// var s = new Date().toLocaleString();
// console.log((s.lenght===21)?`${s.slice(10,12)}${s.slice(19,21)}:${s.slice(13,15)}:${s.slice(16,18)}`:
// `${s.slice(9,11)}${s.slice(18,20)}:${s.slice(12,14)}:${s.slice(15,17)}`);

// // 2.
// // console.log(window.print());

// //3. 
// // mm-dd-yyyy mm/dd/yyyy dd/mm/yyyy dd-mm-yyyy
//  console.log(`${new Date().getMonth()+1}/${new Date().getDate()}/${new Date().getFullYear()}`)
//  const date =  new Date();
//  const newdate = date.getDate();
 
//  const month = date.getMonth()+1;
//  const year = date.getFullYear();
//  console.log(
//   `${month <10?"0"+month:month}/${newdate <10?"0"+newdate:newdate}/${year}`
//  )
//  console.log(
//   `${month <10?"0"+month:month}-${newdate <10?"0"+newdate:newdate}-${year}`
//  )
//  console.log(
//   `${newdate <10?"0"+newdate:newdate}/${month <10?"0"+month:month}/${year}`
//  )
//  console.log(
//   `${newdate <10?"0"+newdate:newdate}-${month <10?"0"+month:month}-${year}`
//  )

// //4. Calculate Area of Triangle (Sides: 5, 6, 7)
// let a = 5;
// let b = 6;
// let c = 7;
// function area(a,b,c){
//   let s = (a+b+c)/2;
//   let ar = Math.sqrt(s*(s-a)*(s-b)*(s-c))
//   let final = Math.round(ar);
//   return final;
// }

// console.log(area(a,b,c));
// 5. Rotate String 'w3resource' Periodically
// let r = "w3resource"
// let reversed = "";
// for (let i = r.length - 1; i >= 0; i--) {
//     reversed += r[i];
// }

// console.log(reversed)


//6 Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.
// function rd (num1,numm2){
//   let some = num1+numm2;
//   return (some >= 50 && some <= 80) ? 65 : 80;

// }

// console.log(rd(3,4));

//7 Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.


// let j=2;
// let k =2;
// let l = 2;

// function check(j,k,l){
//    return(j===k && k===l?30:40)
//   }
// console.log(check(4,3,3))

// Write a JavaScript program to find the number appearing most frequently in a given array of integers. [1,2,3,4,5,1,3,4,5,3,4,5,3,3,3,3,3,4]

// let intsrt = [1,2,3,4,5,1,3,4,5,3,4,5,3,3,3,3,3,4];
// console.log("hello")
let mySet = new Set();
let myArray = [1, 2, 3];
mySet.add(myArray);

console.log(mySet); // Output: Set { [ 1, 2, 3 ] }

