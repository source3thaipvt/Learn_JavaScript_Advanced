// Destructuring // dỡ bỏ cấu trúc
const arr = [10,20,30,40,50]
const [a, b, c, d, e] = arr
console.log( a, e) // 10 50
const [z, , , x, y] = arr
console.log(x)// 40

const arrs = [10] // 10 []
// const arrs = [10, 20, 30, 40, 50] // 10 [ 20, 30, 40, 50 ]
const [i, ...j] = arrs
console.log(i, j) 


const arrss = [10] 
const [m, n = 20] = arrss
console.log(m, n) // 10, 20

const obj = {
    f : 1,
    g: 2,
    h: 3,
}

// const { f: f, g: g, h:h} = obj // 1 2 3
const { f: f, g, h} = obj // key giong nhau thi bo di
console.log(f,g,h) // 1 2 3
const {f: r, ...t} = obj
console.log(r,t) // 1 { g: 2, h: 3 }