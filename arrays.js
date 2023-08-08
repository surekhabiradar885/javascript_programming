/**
 * Creating Array
 */
const collection = ["piggy", 5, 8, true];
collection[2] = "bank";

console.log("array ", collection);

collection[collection.length] = "new item";
console.log("add at the collection length ", collection);

collection[20] = "at the end";
console.log("array length ", collection.length); //o/p 21
console.log("array item at index 10", collection[10]); // undefined
collection[10] = "new value to undefined";
console.log("array item at index 10", collection[10]); //new value to undefined
/*
 *Array methods */
let backpackContents = ["piggy", "headlamp", "pen"];

//1. display array items as string

console.log(backpackContents.join()); //piggy,headlamp,pen
console.log(backpackContents.join(" ")); //piggy headlamp pen

//2. Push & unshift method is more secure method to add the elements to array
backpackContents.push("pencil", 5);
console.log(backpackContents); //['piggy', 'headlamp', 'pen', 'pencil', 5]

backpackContents.unshift("eraser", 6); //['eraser', 6, 'piggy', 'headlamp', 'pen', 'pencil', 5]
console.log(backpackContents);

// 3. pop & shift
backpackContents.pop(); //['eraser', 6, 'piggy', 'headlamp', 'pen', 'pencil']
backpackContents.shift(); //[ 6, 'piggy', 'headlamp', 'pen', 'pencil']
backpackContents.shift();

backpackContents.forEach((item) => {
  console.log(`<li>${item}<li>`);
});

// return the first array item which has length >= 5
let longItmes = backpackContents.find((item) => {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItmes ", longItmes);

console.log("sorted array", backpackContents.sort());
backpackContents.push("notebook");

// remove specific item from the array

let foundItem = backpackContents.find((item) => item === "notebook");
console.log("found item ", foundItem);

// find and remove array element
let removeItem = "notebook";
backpackContents.splice(backpackContents.indexOf(removeItem), 1);
console.log(`Array element ${removeItem} has been removed:`, backpackContents);
