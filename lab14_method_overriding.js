// method overriding: ghi de

class CoffeeMachine{
    makeCoffe(){
        return console.log('making coffee.....')
    }
}
class SpecialCoffeeMachine extends CoffeeMachine{
   makeCoffe(){
       console.log('make coffee and do something....')
   }
 
}
const coffeeMachine = new SpecialCoffeeMachine();
coffeeMachine.makeCoffe()
let x = new CoffeeMachine()
console.log(x.makeCoffe())
// cach 2
class SpecialCoffeeMachines extends CoffeeMachine{
   makeCoffe(cb){
       console.log('make coffee and do something....')
       cb();
   }
   
}
const coffeeMachines = new SpecialCoffeeMachines();
coffeeMachines.makeCoffe(function(){
    console.log('Call back Boss')
})