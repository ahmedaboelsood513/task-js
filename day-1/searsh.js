// day-1

// Unary Plus (+)
console.log("Unary Plus (+)");
let x = +"200";
console.log(x); 
let y = +false;
console.log(y); 
let z = +"hello";
console.log(z); 

// Unary Negation (-)
console.log("\nUnary Negation (-)");
let a = -3;
console.log(a); 
let b = -"3";
console.log(b); 
let c = -true;
console.log(c); 

// Increment (++)
console.log("\nIncrement (++)");
let num1 = 5;
console.log(++num1); 
console.log(num1++); 
console.log(num1);   

// Decrement (--)
console.log("\nDecrement (--)");
let num2 = 5;
console.log(--num2); 
console.log(num2--); 
console.log(num2);   

// Logical NOT (!)
console.log("\nLogical NOT (!)");
let isTrue = !true;
console.log(isTrue);   
let isFalse = !false;
console.log(isFalse);  
let notNumber = !0;
console.log(notNumber); 

// Typeof (typeof)
console.log("\nTypeof (typeof)");
let typeString = typeof "hello";
console.log(typeString); 
let typeNumber = typeof 42;
console.log(typeNumber); 
let typeObject = typeof {};
console.log(typeObject); 

// Delete (delete)
console.log("\nDelete (delete)");
let obj = {name: "Hussein", age: 30};
delete obj.age;
console.log(obj); 

// Type Conversion
console.log("\nType Conversion");
let num = 42;
let str = String(num);
console.log(str); 
let bool = Boolean(num);
console.log(bool); 

// Type Coercion
console.log("\nType Coercion");
let result = "5" - 3;
console.log(result); 
let concat = "5" + 3;
console.log(concat); 