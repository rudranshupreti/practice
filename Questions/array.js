// // let mySet = new Set();
// // let myArray = [1, 2, 3];
// // mySet.add(myArray);

// // console.log(mySet); // Output: Set { [ 1, 2, 3 ] }


// //1. input = [1,4,6,2,8,4,9,2,3,4,6,7,6,9,0] output =[0,1,2,3,4,6,7,8,9]
// // let array =  [1,4,6,2,8,4,9,2,3,4,6,7,6,9,0];
// // function filter (arr){
// //   let newArr =[...new Set(arr)];
// //   for (let i=0;i<newArr.length;i++){
// //     for(let j=0;j<newArr.length-i-1;j++){
// //       if(newArr[j]<newArr[j+1]){
// //         let temp=newArr[j];
// //         newArr[j]= newArr[j+1];
// //         newArr[j+1]=temp
// //       }
// //     }
// //   }
// //   return newArr;
// // }
// // console.log(filter(array));



// let nk = 5;
// for (let i = 1; i <= nk; i++) {
//   console.log(' '.repeat(nk - i) + '*'.repeat(nk));

// }



// let n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(' '.repeat(n - i) + '*'.repeat(i*2-1));
// }
// for (let i = n-1; i >= 1; i--) {
//   console.log(' '.repeat(n - i) + '*'.repeat(i*2-1));
// }

// let n3 = 10;
// for (let i = 5; i <= 10; i++) {
//   console.log(' '.repeat(n3 - i) + '*'.repeat(i*2-1));

// }
// for (let i = n3-1; i >= 1; i--) {
//   console.log(' '.repeat(n3 - i) + '*'.repeat(i*2-1));
// }

// // let n = 5;
// // for (let i = 1; i <= n; i++) {
// //   for(let j= n-1;j>=n;i--){
// //     console.log('*'.repeat(j));  }
// //   console.log('*'.repeat(i));

// // }

// function calculate(number){
//   pattern = ' ';
//   for (let i = 1; i <= number; i++) {
//     for (let j = 1; j < i; j++) {
//       pattern += " *"
//     }
//     pattern += "\n";
//   }
//   console.log(pattern);
// }
// calculate(7);


// function calculate(number) {
//   let pattern = ''; // Initialize an empty string
//   for (let i = 1; i <= number; i++) {
//     // Add spaces
//     for (let j = 1; j <= number - i; j++) {
//       pattern += ' ';
//     }
//     // Add stars
//     for (let k = 1; k <= i; k++) {
//       pattern += '*';
//     }
//     pattern += '\n'; // Move to the next line
//   }
//   console.log(pattern);
// }
// calculate(5);

// function printDiamond(n) {
//   let pattern = '';

//   // Upper Pyramid
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//       pattern += ' ';
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       pattern += '*';
//     }
//     pattern += '\n';
//   }

//   // Lower Inverted Pyramid
//   for (let i = n - 1; i >= 1; i--) { // Fixed the condition
//     for (let j = 1; j <= n - i; j++) {
//       pattern += ' ';
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       pattern += '*';
//     }
//     pattern += '\n';
//   }

//   console.log(pattern);
// }

// printDiamond(4);





// function printParallelogram(rows, cols) {
//   let pattern = '';

//   for (let i = 0; i < rows; i++) {
//     // Add leading spaces to create the shift
//     for (let j = 0; j < i; j++) {
//       pattern += ' ';
//     }
//     // Print stars
//     for (let k = 0; k < cols; k++) {
//       pattern += '*';
//     }
//     pattern += '\n';
//   }

//   console.log(pattern);
// }

// printParallelogram(5, 7);
