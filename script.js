/**
 * scope, var, let and const
 */
//var color = "purple";
let color = "purple";
//const color = "purple";
document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue"; //if color declared const before gives TypeError asignment to constant variable and stops executing next statements
function headingColor() {
  color = "yellow";
  //let titleColor = "yellow"; // local scope
  // document.querySelector(".title").style.color = titleColor;
  document.querySelector(".title").style.color = color;
}
headingColor();
//console.log("outside scope",titleColor); gives ReferenceError and stops executing next statements
document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

/**
 * Data types in JavaScript
 */
// String:
let stringDemo = "A string of text.";
console.log("String:", stringDemo);

// Numbes:
let integerDemo = 4;
console.log("Integer:", integerDemo);

let floatDemo = 5.6;
console.log("Floating point number:", floatDemo);

// Boolean:
let booleanDemo = true;
console.log("Boolean value:", booleanDemo);

// Null value (nothing):
let nullDemo = null;
console.log("Null value:", nullDemo);

// Undefined:
let undefinedDemo;
console.log("Undefined:", undefinedDemo);

let undefinedAssignedDemo = undefined;
console.log("Undefined assigned:", undefinedAssignedDemo);

// Object:
const objectDemo = {
  dance: "Mambo",
  number: 5,
};
console.log("Object:", objectDemo);

// Array:
const arrayDemo = ["tango", "foxtrot", "waltz", "rumba", "bolero"];
console.log("Array:", arrayDemo);
