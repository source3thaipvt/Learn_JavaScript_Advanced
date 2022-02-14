// closure: check bien nao ko dung nua bo ra khoi bo nho
// garbage collector: 
// design patterns
function sum (a,b){
    const c = a +b;
    function func(){
        console.log(c)
    }
    return func;
}
sum(1,5); // <trong></trong>
sum(5,2)(); //7

function debug(...name){
    return function(str){
        console.log(`[${name}] ${str}`)
    }
}
const log = debug('Mouse','Hihi')// log được gán vào function(str)
log('Error happend')// khi log được gọi, thì string truyền vào str