// Call // nhan bao nhieu tham so cung duoc
// tham so dau tien dai dien thg this {this, var1, var2}

function greeting(name,age ){
   console.log(`Hi, ${name} I am ${age}!`) 
}

greeting.call(null, 'Tom', 10) //Hi, Tom I am 10!
greeting.call() // Hi, undefined I am undefined!
greeting.call('Hai', 10)

function greetings(){
    console.log(`Hi, ${this.name} I am ${this.age}!`) 
 }
var cat = {
    name : 'Meop',
    age : 10
}
greetings.call(cat)