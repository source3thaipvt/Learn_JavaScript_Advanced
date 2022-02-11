// class
// bản chất của class giống prototype || class giúp code viet ngắn gọn hơn

// contructor function
function Mouse(name) {
  this.name = name;
}

Mouse.prototype.run = function () {
  console.log(`Hi, ${this.name} !`);
};

const mickey = new Mouse("Mickey");
mickey.run();

//class
class Cat {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`Hi, ${this.name} !`);
  }
}
const tom = new Cat("Tom");
tom.run();
