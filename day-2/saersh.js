// Day2


// console.log(Number.MAX_SAFE_INTEGER) // 
// console.log(Number.MAX_SAFE_INTEGER + 5)
// console.log(Number.MAX_SAFE_INTEGER - 5)

// console.log(Number.MAX_VALUE) //
// console.log(Number.MAX_VALUE + 5)
// console.log(Number.MAX_VALUE - 5)


// // 2.	String ( .substring ) 
// // slice
// // String( .substring ) (start: number, end?: number)
// let string = "API, Frontend, Backend, Fullstack"

// let length = string.length;

// console.log("All length: ", length)


// console.log("what is index: ", string.substring(2))
// console.log("what is index: ", string.substring(5, 12))
// console.log("what is index: ", string.substring(12, 5))
// console.log("what is index: ", string.substring(-12, -5)) //output: "  "
// console.log("what is index: ", string.substring(-12, 5)) //output: "API"



// let str = "API, Frontend, Backend, Fullstack"

// console.log(str.substr(5, 18)) //output: Frontend, Backend



// // 4.	String( .includes )
// const sentence = 'The quick brown fox jumps over the lazy dog.';


// console.log(sentence.includes("fox")) // output: true
// console.log(sentence.includes("Fox")) //output: false
// console.log(sentence.includes("fox", 0)) // output: true
// console.log(sentence.includes("fox", 20)) // search in 20 --------> end output: false


// // -------------------------------------------------------
// // 5.	String New Methods (6 new Methods) => 3 Example

// var ui = "Cate are the bast! "


// //1 startsWith 
// console.log(ui.startsWith("Cate"))
// console.log(ui.startsWith("are"))

// console.log(ui.startsWith("Cate", 2))
// console.log(ui.startsWith("Cate", 0))


// // -------------------------------------------------------
// //2 endsWith 
// console.log(ui.endsWith(" "))
// console.log(ui.endsWith("!"))

// console.log(ui.endsWith("bast! ", 15))
// console.log(ui.endsWith("bast! ", 19))


// // --------------------------------------------------------
// //3 concat دمج
// var c1 = "Hello"
// var c2 = "World"
// console.log(c1.concat(' ' , c2))
// // console.log(c1.concat(' ' , c2, c3 , ..... , c6))


// // ----------------------------------------------------------
// //4 search
// var text = "Tht rain in SPAIN stays mainly in the plain"

// console.log(text.search("ain"))
// console.log(text.search("AIN"))
// console.log(text.search("sp"))


// // -----------------------------------------------------------
// //5 replace Change the word 
// let text2 = "Mr Blue has a blue house and a blue car"

// console.log(text2.replace("blue", "red"))
// console.log(text2.replaceAll("blue", "red"))


// // ----------------------------------------------------------------
// // \\ \r \n \f

// const fileword = "C:windows\r7essen mostafa\nname\ffilename.js"
// const filePath = "C:\\windows\\7essen mostafa\\name\\filename.js"
// console.log(fileword)
// console.log(filePath)

// // -------------------------------------------------------------------------------
// // The String.prototype.substring() method in JavaScript is used to extract a portion of a string between two specified indices (positions), and return it as a new string.

// // str.substring(indexStart, indexEnd)
// // Example 1
// let str1 = "Hello, World!";
// let result10 = str1.substring(0, 5);
// console.log(result10); // Output: "Hello"

// // Example 2
// let str2 = "JavaScript";
// let result2 = str2.substring(4);
// console.log(result2); // Output: "Script"

// // Example 3
// let str3 = "Substring Example";
// let result3 = str3.substring(9, 3);
// console.log(result3); // Output: "string"



// //The String.prototype.substr() method in JavaScript is used to extract a substring from a string, starting at a specified position and extracting a specified number of characters.
// //str.substr(start, length)
// // Example 1
// let str4 = "Hello, World!";
// let result4 = str4.substr(7, 5);
// console.log(result4); // Output: "World"

// // Example 2
// let str5 = "JavaScript";
// let result5 = str5.substr(4);
// console.log(result5); // Output: "Script"

// // Example 3
// let str6= "Learning JavaScript";
// let result6 = str6.substr(-10, 10);
// console.log(result6); // Output: "JavaScript" 

