let string = 'INDIA';
let arr = string.split('');
arr.splice(3, 0, 'O', 'N', 'E', 'S');
let output = arr.join('');

console.log(output);