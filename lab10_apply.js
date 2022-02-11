// apply
// call: func.call(this, params1, params2,....);
// apply: func.apply( this, [param1, params2, ....]);
// "Apply for array and Call for comma".
// arguments là array like object bên trong function nên bạn phải dùng apply.
function greeting(){
    console.log(`Hi, ${this.name} I am ${this.age}!`) 
 }
 var cat = {
    name : 'Meop',
    age : 10
}
greeting.apply(cat) // Hi, Meop I am 10!
// tinh tong
function sum(){
    const number = Array.from(arguments);
    console.log(arguments)
    console.log(number)
    return number.reduce(function(a,b){
        return a + b
    },0)
}
//tinh trung binh
function average(){
    // sum
    const x = sum.apply(null,arguments)
    console.log('sum ',x)
    return console.log('avg: ',x/arguments.length)
}
console.log(sum(3,4,6,4)) //17
average(5,3,5,6) //19 //4.75


function sums(){
    console.log(arguments)
	let tong = 0;
    
	for(let i=0;i<arguments.length;i++){
		tong += arguments[i];
	}
	return tong;
}
function averages(){
  var x = sums.apply(null,arguments);
  console.log('tong ', x)
  return x/arguments.length;
}
console.log(averages(1,2,3,5));


