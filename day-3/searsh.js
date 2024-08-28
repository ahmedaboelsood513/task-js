// Day 3

// 1 concat 

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = arr1.concat(arr2);
// console.log(result) // Output: [1, 2, 3, 4, 5, 6]

// //                                ------------------------------------------------------------

// // *
// // 2 copyWithin

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.copyWithin(1, 4)); //  [1, 5, 3, 4, 5]

// //                                ------------------------------------------------------------

// // 3 fill  

// let x = [1, 2, 3, 4, 5];
// console.log(x.fill(1, 7))// [1, 2, 3, 4, 5, 6, 7]

// //                                ------------------------------------------------------------

// // *
// // 4 filter  Creates a new array with all elements 

// let t = [1, 2, 3, 4, 5];
// let result3 = t.filter(x => x % 2 === 0); // [1, 3, 5]
// console.log(result3)

// //                                ------------------------------------------------------------

// // 5 includes Search index in Arry or not
// const e = [1, 2, 3, 4, 5];
// const result4 = e.includes(3); // true

// console.log(result4)

// //                                ------------------------------------------------------------

// // 6 indexOf 

// const w = [1, 2, 3, 4, 5];
// const result5 = w.indexOf(4); // 3

// console.log(result5)

// //                                ------------------------------------------------------------

// // 7 lastIndexOf
// const d = [1, 2, 3, 4, 5];
// const result6 = d.lastIndexOf(-4);

// console.log(result6)


// //                                ------------------------------------------------------------

// // 8 push   

// let n = [1, 2, 3];
// n.push(4, 5); // [1, 2, 3, 4, 5]

// console.log(n)

// //                                ------------------------------------------------------------

// // 9 pop   

// let v = [1, 2, 3];
// v.pop(); // [1, 2]

// console.log(v)

// //                                ------------------------------------------------------------

// // 10 shift   

// let s = [1, 2, 3];
// s.shift(); // [2, 3]
// console.log(s)
// //                                ------------------------------------------------------------

// // 11 unshift   

// let p = [1, 2, 3];
// p.unshift(0); // [0, 1, 2, 3]
// console.log(p)
// //                                ------------------------------------------------------------

// // *
// // 12 splice Adds or removes elements from an array.

// let o = [1, 2, 3];
// o.splice(1, 0, 4, 5); // [1, 4, 5, 2, 3]
// console.log(o)

// //                                ------------------------------------------------------------
// // sort   
// let ne = ["hoss" , "moss", "saraa", "osamaa"];

// console.log(ne.sort())
// console.log(ne)

// //                                ------------------------------------------------------------
// // reverse  
// let nea = ["hoss" , "moss", "saraa", "osamaa"];
// console.log(nea.reverse())

// //                                ------------------------------------------------------------

// // join("-"))     -

// let jo = ["hoss" , "moss", "saraa", "osamaa"];
// console.log(jo.join("-"))

// ---------------------------
// ---------------------------
// ---------------------------

// whate is operator this " ?? " and " || "


// let number = [1,2,3,4,88,9,68]
// let addNumber = []
// let ecerNumber = []

// for (var i = 0; i < number.length; i++){
//     if (number[i] % 2 == 0) {
//         addNumber.push(number[i])
//     }else {
//         ecerNumber.push(number[i])
//     }
// }

// console.log("addNumber", addNumber)
// console.log("ecerNumber", ecerNumber)

// function countOld(start, end) {
//     console.log(start -  end)
// }
// countOld(2003, 2017)
// countOld(2004, 2018)
// countOld(2005, 2019)




// -------------------------------------

// function printNum1(num1, num2){
//     return num1 + num2;
// }
// console.log(printNum(16, 16))


// let printNum3 = (num1, num2) => num1 + num2;
// console.log(printNum(16, 16))

