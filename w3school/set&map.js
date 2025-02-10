const l = new Set(['q','w','w']);
// console.log(l);
// console.log(l.add('wwe'));
// console.log(typeof(l));
// console.log(l.add('w'));
// console.log(l.has('k'));
// let txt = '';
// let =  l.forEach(function(value){
//   txt += value;
// })
// console.log(txt);
// let text = "";
// for (const x of l) {
//   text += x;
// }
// console.log(text);


// Get all Entries
// const myIterator = l.entries();

// List all Entries

// let txxt = '';
// for(const x of l.entries()){
//   txxt += x + ' ';
// };

// console.log(txxt);
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// console.log(fruits);


// const fruits = new Map();
//  fruits.set("apples", 500);
//  fruits.set("apples", 500);
//  fruits.set("applses", 700);
//  fruits.set("applcces", 800);



// console.log(fruits);


// console.log(fruits.get('apples'));
// console.log(fruits instanceof Map);
// console.log(fruits.clear());
// console.log(fruits.size);

function formatString(str) {
  return str
      .trim() // Remove leading and trailing spaces
      .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
      .split(' ') // Split into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' '); // Join back into a sentence
}

const text = "  hello my name  is      rudra    ";
console.log(formatString(text)); 
// Output: "Hello My Name Is Rudra"
