// rest: toan tu rest : phan con lai
// rest: tra ve 1 array [ 1, 2, 3,...]
// arguments tra ve 1 object like [Arguments] { '0': 1, '1': 3, '2': 5, '3': 7 }
function log(a) {
  console.log(a);
}
log(1); // 1
log(1, 2, 3, 4); // 1

// use rest
function logs(...numbers) {
  console.log(numbers); // [ 3, 5, 7 ]
  console.log(arguments); // [ 3, 5, 7 ]
}
logs(1, 3, 5, 7);

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(3, 4, 6, 1, 4));

function sums() {
  const nums = Array.from(arguments);
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sums(3, 4, 6, 1, 4, 4, 6, 3));



function concat(separator, ...string){
    return console.log(string.join(separator));
}
concat('.', 'a', 'b', 'c') //a.b.c

function concats(separator, ...string){
    
    return console.log(separator.concat(string)); // .a,b,c
    // return console.log(string.concat(separator)); //[ 'a', 'b', 'c', '.' ]
}
concats('.', 'a', 'b', 'c') //a.b.c