// string is use to store the data in or text it is use to writ with quotes

// let text = "rudranh upreti"
// console.log(text);
// string double or single quot me sam ekam krti he 

// let lenght = text.length;
// console.log(lenght);

// let person = "hello sir me name is \"udran\"esyhseet.";
// let person1 = "hewjifbwbfaw\\qewegqewg"
// console.log(person)

// let x = "john";
// let y =  new String("john");
// a = x ===y ;
// console.log(a);//true



// we have 4 tyep to extract charactor
// let name = "rudrasnh";
// let char =  name.charAt(3);
// let charCode = name.charCodeAt(3);
// let letter =  name.at(4);
// let braket = name[2];

// console.log(char);
// console.log(letter);
// console.log(charCode);
// console.log(braket);

// we have three method to extract string part
 
// let name = "rudransh wfwE2  ERW2R23QR2QR132RE";
// let part =  name.slice(3,6);
// console.log(part);
 
// let part2 = name.slice(5);
// console.log(part2)
// let Part3 = name.slice (-5,-1)
// console.log(Part3);

// let name = "    I am   gooD boy    rudransh.     "

// const result = "I Am Good Boy Rudransh."

// function string (name){
//   let outerspace = name.split(" ");
  
//   let final = [];
//   for (const word of outerspace){
//     if (
//       word.length >=1
//     ){
//       final.push(word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
//     }
//   }

//   return final.join(" ")
  
  
// }


// console.log(string(name));

// let text =  `he's name is "prakhar" `;
// console.log(text);
// using substring ye slice jese kaam krta diffrence itna he bss isme ham value 0 nhi kr skte end or starting ki 

// let str = " aiwkbfiwbgf";
// let text = str.substring(2,4);
// console.log(text);

//substr ye slice ki jese kaam karta he bss insme phele value se jitne index value ko start krta he or end last value me krta he 
// let str2 = str.substr(3,6);
// console.log(str2);

// to upper case and to lowercase

// let text = " My name is rudransh ";
// let up = text.toUpperCase();
// let dw = text.toLowerCase();
// console.log(up,dw);

// let text = "my name is prakher ";
// let text2 = ' is good boy ';
// let con =  text.concat('',text2)
// console.log(con);
//this is use to trim extra space from arting 
// let text = '       hello    ';
// let trim = text.trim();
// console.log(trim); 
// let trims = text.trimStart();
// console.log(trims)
// let triml = text.trimEnd();
// console.log(triml)


// //padmethod
// let text = 'dog';
// let ab = text.padStart("9"," ");
// console.log(ab);

// repeat method

// let txt = "hello world ";
// let result = txt.repeat(4);
// console.log(result);

//it is a relace method use in tring to rrplace the string 

// let text =  "i am is bad boy";
// let replace = text.replace('bad',"good");
// console.log(replace);
// we use /i kyoki jsab koi extra mark ya simbole kisi word ke sath ho or hame usse remove na karna ho 
// let txt = " hello world:";
// let newtxt = txt.replace(/hello/i,"by");
// console.log(newtxt);

// /g is use to remove all the by in string 
// let txt =  " hello world hello sir hello ";
// let newtxt = txt.replace(/hello/g, "by")
// console.log(newtxt);

// let txt  =  "hello          hello    hello     world "
// let replaceall = txt.replaceAll(' ','');
// console.log(replaceall)

// split is use to convert string to array
// let txt = 'hello world kese he ap';
// let sp =  txt.split(" , ");
// console.log(sp);



// indexOf use to find the index value of string in js it is similar to array 

// let txt  = "plae help  me 'sir' ME  hello me  ";
// let find = txt.indexOf(" ");
// console.log(find);
// let lastindex =  txt.lastIndexOf('');
//it will -1 when we not taking any value in bbrakets or valuye is not found
// console.log(lastindex);
// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
// let argument  = txt.lastIndexOf('me',15);
// console.log(argument);

// let search = txt.search('sir');
// console.log(search);
 
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

// let match = txt.match('me'
// );
// console.log(match);

// let match2 = txt.match(/sir/);
// console.log(match2);

// let match3 = txt.match(/me/g);it is case sencitive
// console.log(match3);

// let match4 = txt.match(/me/gi);//it is case not case secitive 
// console.log(match4);

// let iterator= txt.matchAll(/me/gi);
// console.log(iterator);


// let include = txt.includes("me"
// );

// console.log(include);

// let startw = txt.startsWith('plae');
// console.log(startw);
// template letrates

// let temp = 'kasbfhw sfbjwsf'
// let rd = "aeegggvf";
// let add = `${temp}+${rd}`

// console.log(add);


let arr =[ 1,2,3,4,5];
let min = arr.maxMin();
console.log(min);