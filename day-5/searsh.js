//Map
//1.Basic Usage:

let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');

console.log(map.get('key1')); // Output: value1
console.log(map.size); // Output: 2

//2.Iteration:
let map2 = new Map();
map.set('a', 1);
map.set('b', 2);

for (let [key, value] of map) {
    console.log(key, value);
}
// Output:
// a 1
// b 2

//3.Using Objects as Keys:

let map3 = new Map();
let objKey = {};
map.set(objKey, 'value');

console.log(map.get(objKey)); // Output: value
//4.Deleting Entries:

let map4= new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');

map.delete('key1');

console.log(map.has('key1')); // Output: false

//5.Using NaN as a Key:
let map5 = new Map();
map.set(NaN, 'Not a Number');

console.log(map.get(NaN)); // Output: Not a Number



///WeakMap
//1.Basic Usage:
let weakMap = new WeakMap();
let objKey1 = {};

weakMap.set(objKey, 'value');

console.log(weakMap.get(objKey)); // Output: value

//2.Private Data Storage:
let privateData = new WeakMap();

class Secret {
    constructor() {
        privateData.set(this, {
            password: 'abc123'
        });
    }

    getPassword() {
        return privateData.get(this).password;
    }
}

let secretObj = new Secret();
console.log(secretObj.getPassword()); // Output: abc123

//3.Automatic Key Removal:
let weakMap3 = new WeakMap();

(function() {
    let obj = {};
    weakMap.set(obj, 'value');
})();

// `obj` is eligible for garbage collection here, and the entry in WeakMap is automatically removed

//4.Limited API:
let weakMap4 = new WeakMap();
// Methods like `size`, `clear`, `forEach` are not available in WeakMap.

//5.Key Restrictions:
let weakMap5 = new WeakMap();
// weakMap.set('key', 'value'); // TypeError: Invalid value used as weak map key
///////////////////////////////////////////////////////////////////////////////////////////
//set/
//1.Basic Usage:
let set1 = new Set();
set.add('value1');
set.add('value2');

console.log(set.has('value1')); // Output: true
console.log(set.size); // Output: 2
//2.Iteration:
let set2 = new Set(['a', 'b', 'c']);

set.forEach(value => {
    console.log(value);
});
// Output:
// a
// b
// c
//3.Adding and Deleting Elements:
let set3= new Set();
set.add('value1');
set.add('value2');

set.delete('value1');

console.log(set.has('value1')); // Output: false
//4.Handling Different Value Types:
let set4 = new Set();
set.add(1);
set.add('Hello');
set.add({ key: 'value' });

console.log(set.size); // Output: 3
//5.Unique Values Only:
let set5 = new Set([1, 2, 2, 3, 3, 3]);

console.log(set); // Output: Set(3) { 1, 2, 3 }
////
//WeakSet
//1.Basic Usage with Objects:
let weakSet1 = new WeakSet();
let obj1 = {};
let obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // Output: true
//2.Automatic Garbage Collection:
let weakSet2 = new WeakSet();
let obj = {};

weakSet.add(obj);

// obj is eligible for garbage collection here
//3.Restricted API:
let weakSet3 = new WeakSet();
// weakSet.size; // Error: WeakSet objects do not have a .size property

//4.WeakSet and Memory Management:
let weakSet4 = new WeakSet();

(function() {
    let obj = {};
    weakSet.add(obj);
})();

// obj is eligible for garbage collection here, and the entry in WeakSet is automatically removed

//5.Use Case - Storing DOM Node References:
let weakSet5 = new WeakSet();
let element = document.querySelector('#myElement');

weakSet.add(element);

// If element is removed from the DOM, it can be garbage collected along with its WeakSet entry
////////////////////
//Using return in Object Methods
let obj6 = {
  value: 10,
  getValue: function() {
      return this.value;
  }
};

console.log(obj.getValue()); // Output: 10
///Using console.log() in Object Methods
let obj5 = {
  value: 10,
  logValue: function() {
      console.log(this.value);
  }
};

obj.logValue(); // Output: 10
///////////////////////
//Pass by Value
let a = 10;

function modifyValue(val) {
    val = val * 2;
    console.log(val); // Output: 20
}

modifyValue(a);
console.log(a); // Output: 10
//////Pass by Reference
let obj3 = { value: 10 };

function modifyObject(o) {
    o.value = 20;
}

modifyObject(obj);
console.log(obj.value); // Output: 20