// Template String
function greeting(name){
    return 'Hi '+ name + ' !'
}
var resuft = greeting('Minh')
console.log(resuft)

//hd dung template string
function greeting2(name){
    return `Hi, \n \n


     ${name} !`;
}
var resuft2 = greeting('Minh')
console.log(resuft2)