// arrow fruction expression
// fat arrow: ly do goi la fat arrow '=>'
// giup code viet ngan gon hon, thay the cho khai bao function truyen thong
var log = console.log;
function sum(a, b) {
  return a + b;
}
log(sum(4, 2));

var sum2 = function (a, b) {
  return a + b;
};
log(sum2(3, 6));

// Cach viet fat arrow
var total = (a, b) => {
  return a + b;
};
var total2 = (a, b) => a + b;
log(total(4, 8));
log(total2(4, 8));

var square = (x) => x*x;
var square2 = x => x*x;
log(square(4));
log(square2(6));

var doSomeThing = () =>{
    return Date.now();
}
log(doSomeThing())

var arr = [4,2,6]
var arrMap = arr.map(x=> x*x)
log(arrMap)