// global context
// function context
// bind: se tao ra 1 func moi. this se duoc 'set value'
// hay còn được hiểu là lấy giá trị theo this
var mouse = {
    name: 'Mickey',
    sayHi: function(){
        console.log('Hi, my name is ',this.name)
    }
};

mouse.sayHi(); //Hi, my name is  Mickey
var say = mouse.sayHi.bind(mouse);
// say = func(){console.log..}
// this cua no la bien mouse
say()

var cat = {
    name: 'Tom'
}
var sayCat = mouse.sayHi.bind(cat)
sayCat()

//hoat dong cua bind
function run(cb){
    console.log('run...')
    cb(); // cb ko co context
}
var meo = {
    name: 'Mickey',
    sayHi: function(){
        console.log('Hi, my name is ',this.name)
    }
};
run(meo.sayHi) // underfind
run(meo.sayHi.bind(meo))
// run...
// Hi, my name is  Mickey