// Push then pop from an array

function modifyArray(arr) {
  arr.push("New Item");
  arr.pop();
  return arr;
}
console.log(modifyArray([1, 2, 3]));