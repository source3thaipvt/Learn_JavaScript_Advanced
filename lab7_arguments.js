// Array like obj && arguments
// array thuong
const arr = ["Tranh", "Thanh", "Thuy"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// array like obj
const obj = {
    0: 'Thanh',
    1: 'Trang',
    2: 'Thuy',
    length: 3
};

for(let i = 0; i<obj.length;i++){
    console.log('Ahihi', obj[i])
}

//arguments: khi nhap value*n lan thi mỗi value là 1 phần từ có index đi kèm, và lenght theo số phần tử nhập vào
// console.log(arguments) tra ve 1 obj { 'index 0': value, 'index 1': value, 'index*n': value,... }
// hay còn gọi là nhận n tham số đầu vào
function sum(){
    let resuft = 0;
    console.log(arguments) 
    // [Arguments] { '0': 3, '1': 4, '2': 2, '3': 6, '4': 8, '5': 2 }
    for(let i = 0; i<arguments.length;i++){
        resuft += arguments[i]
    }
    return resuft;
}
console.log(sum(3,4,2,6,8,2)) //25
//cach 2
function sum2(){
    const numbers = Array.from(arguments) //[ 3, 4, 2, 6, 8, 2 ]
    console.log(numbers)
    return numbers.reduce(function(a,b){
        return a + b
    },10)
}
console.log(sum2(3,4,2,6,8,2)) //35
