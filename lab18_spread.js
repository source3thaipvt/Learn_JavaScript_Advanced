// ...spread: tra ket qua 1 array ra thanh cac phan tu 
// ...rest: gom no lai thanh 1 array
const a = [1, 2, 3];
const b = [0, ...a, 4, 5]; //[ 0, 1, 2, 3, 4, 5 ]
const c = [0, a, 4, 5]; //[ 0, [ 1, 2, 3 ], 4, 5 ]
console.log(b);
console.log(c);
function sum(...numbers) {
  console.log(numbers);
}
sum(1, 2, 3, 4); //[ 1, 2, 3, 4 ]
sum(...a); // sum(1,2,3) // [ 1, 2, 3 ]

