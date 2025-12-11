// console.log("Map and Set");
// // creating a map
// let myMap = new Map();

// // Adding Key-values pai in map;
// myMap.set("name", "Ankit Sharma");
// myMap.set("age", 27);

// // Getting a values by key
// console.log(myMap.get("name")); //Ankit Sharma

// // check if key is exists
// console.log(myMap.has("age")); // true

// // Delete Key-value pair
// myMap.delete("age");

// console.log(myMap); //Map(1) { 'name' => 'Ankit Sharma' }

// // Iterating through the Map
// for (let [key, value] of myMap) {
//   console.log(key, "===>", value);
// }

// // Size of map
// console.log(myMap.size); // 1

// // Clearing the Map
// myMap.clear();

// console.log(myMap); //Map(0) {}

// console.log("Weak Map");

// let weakMap = new WeakMap();
// let obj = { name: "ankit" };

// weakMap.set(obj, "Developer");

// obj = null; // Remove reference

// // weakMap will automatically remove the entry

// const set = new Set();
// set.add(10);
// set.add("ankit");
// set.add({ age: 25 });

// console.log(set.size); // 3
// console.log(set);      // Iterable, shows all values

const weakSet = new WeakSet();

let obj = { name: "ankit" };
weakSet.add(obj);

obj = null; // remove reference
console.log(weakSet); // WeakSet automatically removes the object
