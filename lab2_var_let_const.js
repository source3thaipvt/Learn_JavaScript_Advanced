// var let const
// 1. declaration (khai bao bien)
// 2. hosting
// 3. block scope (if, for, ...)
// 4. redeclaration (khai baos lai)


var a = 1;
let b = 2;
const c = 3;
console.log(a,b,c)

// 1. Khai bao lai duoc: var
var a =2;
console.log(a)
// Khai bao bien duoc: var, let <const x; => error> 
var e; let f;
console.log(e,f) // underfile underfile

// 2. Hosting
function run(){
    console.log(a)
    var a; // underfile
    // let a; // error
    // const a; // error
}
run()

// 3. Block scope
// var chỉ có function scope, ko tuan thu block scope
// let || const tồn tại cả if và for, ...
if(true){
    var x = 10; // 10
    // const x = 10; // error
    // let x = 10; // error
}
console.log(x) 
for (let i = 0; i<5; i++){
    console.log(i)// 1 2 3 4
}
// console.log(i) // error

// 4. Cac bien co the thay doi gia tri: var, let
// const chi nhan gia tri lan dau, lan 2 se error

// 5. Khai bao lai: Var khai bao lai duoc
// let vs const khong khai bao lai duoc