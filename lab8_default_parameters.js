// Default parameters// tham so mac dinh trong 1 ham
function greeting(name){
    if(name === undefined){
        name = ''
    }
    return `Hi, ${name} !`

}
console.log(greeting('Huynh'))


function greetings(name = 'friend',language = 'vn'){
    if(language === 'en'){
        return `Hi, ${name} !`
    }else if (language === 'vn'){
        return `Chao ban, ${name} !`
    }
    return `Hello, ${name} !`
    

}
console.log(greetings('Minh'))
