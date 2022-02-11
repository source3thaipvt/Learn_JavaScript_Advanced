// Enhanced object Litterals

// contructor function
function Mouse(name){
    this.name = name
}

Mouse.prototype.run = function(){
    console.log(`Hi, ${this.name} !`);
}

const mickey = new Mouse('Mickey')
mickey.run();

// object literals

const jerry = {
    name : 'jerry',
    run: function(){
        console.log(`Ahihi ${this.name} is runnings!`)
    }
} 
jerry.run();

// enhanced object literals: khai bao ngan gon hon
const name = 'Tom';
const cat = {
    name,
    run(){
        console.log(`Cat is my name ${this.name} !!`)
    }
}
cat.run()