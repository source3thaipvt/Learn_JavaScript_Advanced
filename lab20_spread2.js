// ...spread tra 1 array thanh cac phan tu
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const a = [1, 2, 3];
const b = [0, ...a, 4, 5]; //[ 0, 1, 2, 3, 4, 5 ]
console.log(b)

// shawllow-cloning: copy chi 1 level thoi
const obj1 = {
    a: 1,
    b : 2,
    c : 3,
    d: { e: 10}
};
let c = [3,4,65]
let obj2 = {};
for(let key in obj1){
    obj2[key] = obj1[key] //   { a: 1, b: 2, c: 3 }
}
obj2.b = 5
obj2.d.e = 12 // obj1.d.e bi thay doi theo
console.log({obj1, obj2})
// khac phuc: deep clone

for (let key in obj1) {
    //   obj2[key] = obj1[key]; //   { a: 1, b: 2, c: 3 }
      if (typeof obj1[key] === "object") {
        let a = (obj2[key] = {});
        let b = obj1[key];
        for (let key in b) {
          a[key] = b[key];
        }
      } else {
        obj2[key] = obj1[key];
      }
    }
obj2.b = 5
obj2.d.e = 19 
console.log({obj1, obj2})
// ko con bi thay doi nua

let obj5 = {
    ...obj1,
    z: 1000,
    b: 9,// co thay thay doi ma ko bi thay doi obj1
    d: {e: 1020},// co thay thay doi ma ko bi thay doi obj1
};
console.log({obj1, obj5})












var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
  function deepClone(obj, result) {
    // Write code here...
    for(let key in obj)
    {
        if(typeof obj[key] == 'object'){
            result[key] = {};
            deepClone(obj[key],result[key]);
        }
        else{
         result[key] = obj[key]; 
        }
    }
    return result;
  }
  
  var hehe = deepClone(apartment,{});
  console.log(hehe)