// Value types vs. Reference types

let a1 = 1;
let a2 = 1;
console.log(a1 === a2); // value types

let obj1 = { a: 1 }; 
let obj2 = { a: 2 };
console.log(obj1 === obj2);
// obj là 1 cái nhà có biến a là số nhà được lưu ở chỗ khác
// ko thể có 2 nhà(obj) chung 1 số nhà(a) được nên
// thực chất là 2 số nhà khác nhau nên obj1 a khác obj2 a = false
// true
// false
let obj11 = { a: 1 }; 
let obj22 = { a: 1 };
console.log(obj11 === obj22); // reference types
// true
// false


let a3 = a2; // a3 thay doi thi a2 ko thay doi
a3 = 2;
console.log(a2) // 1

let obj3 = obj22; // obj3 thay doi thi obj22 cx thay doi theo
obj3.a = 2;
console.log(obj22) //{ a: 2 } 


let a5 = a2
console.log(a5 === a2) // true
a5 = 2;
console.log(a5 === a2) // false

let obj5 = obj22;
console.log(obj5 === obj22) // true
obj5.a = 2;
console.log(obj5 === obj22) // true


function log(x){
    console.log(x);
    x.b=5; // func thay doi 1 obj ben ngoai func: la cach lam nguy hiem
    // neu nhieu func thay doi cung 1 obj, ko kiem soat duoc bien thay doi cho nao
    // nen tranh thay doi input, thay doi dau vao

}
log(obj1)
console.log(obj1) //{ a: 1, b: 5 }