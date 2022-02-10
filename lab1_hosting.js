// hosting in JS
// nên khai báo biến ở đầu hàm trước khi gọi biến thực hiện, ko thì xảy ra lỗi

var x = 5;
function run(){
    var x = 10;
    console.log(x)
}
run();




