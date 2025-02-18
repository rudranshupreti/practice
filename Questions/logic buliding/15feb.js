// write a function the take two number as input print their sum 
// let sum = (a,b)=>a+b;
// console.log(sum(1,2))
// function find (num){
//   const reminder = num % 2;
//   if (reminder === 0){
//     console.log("odd")}
//     else{
//       console.log("even")
//     }
//   }
// console.log(find(54))

// write the funtion that return the reverse of the string 
// function reverse (string){
//   let output = "";
//   for(let i = string.length-1;i>=0; i--){
//     output +=string[i]
//   }
//   return output;
// }
// console.log(reverse("rudransh"))
// write a function that calculate factorial of a given number 
//  function find(num){
//   let result =1;
//   for(let i = 1;i<=num;i++){
//     result *=i;
//   }
//   return result;
//  }
//  console.log(find(3))
 


// array = [1,2,3,4,3,4,5,4,4]
// function bubbleSort(arr){
//   let n = arr.length;
//   for (let i=0; i<n-1; i++){
//     for (let j=0; j<n-i-1; j++){
//       if(arr[j]>arr[j+1]){
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//     }
// }
//   }
//  return arr;
// }
// console.log(bubbleSort(array))



array = [1,2,3,4,3,4,5,4,4]
function bubbleSort(arr){
  let n = arr.length;
  for (let i=0; i<n-1; i++){
    for (let j=0; j<=n-i-1; j++){
      if(arr[j]<arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
    }
}
  }
 return [...new Set(arr)]
}




console.log(bubbleSort(array))