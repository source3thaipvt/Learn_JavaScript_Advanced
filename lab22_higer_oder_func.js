// Hihger oder function
// nhan vao 1 func lam tham so or tra ve 1 ham func
// chia nho function ra, giup tim ra loi de hon
function debug(...name){
    return function(str){
        console.log(`[${name}] ${str}`)
    }
}
const log = debug('Mouse')
log('Error happened')

function waitAndRun(ms,func){
    setTimeout(func,ms)
}
function run(){
    console.log('run')
}
waitAndRun(2000,run)