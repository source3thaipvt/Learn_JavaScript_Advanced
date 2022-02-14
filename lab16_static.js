// static: static method
// co the goi thang method ma ko can tao new Class
// va nguowc lai
// duoc dung khi ko can phai tao obj || array moi
// hieu nom na la: static la private truy cap tu Class, ko truy cap dc tu bien 'instance'
class Foo {
    static someMethod(){
        console.log('some Method')
    }
    anotherMethod(){
        console.log( 'another Method')
    }
}
Foo.someMethod()
// Foo.anotherMethod() // errro
const foo = new Foo(); // instance
foo.anotherMethod();
// foo.someMethod() // errro 

function Foos (){

}
Foos.prototype.anotherMethod = function(){
    console.log('another Method')
}
Foos.someMethod = function(){
    console.log('some method')
}

Foos.someMethod();
// Foos.anotherMethod(); //error
const foos = new Foos();
foos.anotherMethod()
// foos.someMethod() //error