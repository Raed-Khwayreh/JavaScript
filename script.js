//1st Solution
function clone(array) {
  return array;
}
//2nd Solution
function clone1(array) {
  return [...array];
}
//3rd Solution
function clone2(array) {
  return array.slice();
}
//4th Solution
function clone3(array) {
  return Array.from(array);
}

//Array
var array = [1, 2, 3, 4];
var copyArray = clone(array);
console.log(clone(copyArray));
var copyArray = clone1(array);
console.log(clone(copyArray));
var copyArray = clone2(array);
console.log(clone(copyArray));
var copyArray = clone3(array);
console.log(clone(copyArray));
