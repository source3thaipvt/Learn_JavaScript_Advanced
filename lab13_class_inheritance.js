// class inheritance: class thừa kế

class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`Da an ${this.name} roi!!`);
        return this;
    }
}

class Brid extends Animal{ // co cac method cua Animal
    fly(){
        console.log(`${this.name} Khong biet bay`)
        return this
    }
}

class Parrot extends Brid{
    speak(){
        console.log('Speaking....')
        return this
    }
}
const bird = new Parrot('Chim canh cut')
bird.eat().speak().fly()
// cach ke thua = cuntructor function
function Animals(name){
    this.name = name;
}
Animals.prototype.eat = function(){
    console.log('Eating....')
}
// bird thua ke Animal
function Birds(name){
    const x = Animals.call(this, name); // ke thua tu Animals
    
    console.log(x) // undefined
}

Birds.prototype = new Animals()

console.log(Birds('dds'),'dsa') //undefined dsa