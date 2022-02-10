// arrow function
// fat arrow
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions?retiredLocale=vi
var a = {
  name: "AAA",
  run: function () {
    var run2 = function () {
      console.log(this.name); // thanh this ham run2 // this la global context
    };
    run2.bind(a)(); //la 1 ham
    // de chay ham phai co ()
  },
};
a.run();

var b = {
  name: "BBB",
  run: function () {
    var run2 = function () {
      console.log(this.name); // thanh this ham run2 // this la global context
    }.bind(b);
    run2(); //la 1 ham
    // de chay ham phai co ()
  },
};
b.run();

var c = {
  name: "CCC",
  run: function () {
    var run2 = function () {
      console.log(this.name); // thanh this ham run2 // this la global context
    }.bind(this);
    run2(); //la 1 ham
    // de chay ham phai co ()
  },
};
c.run();

var d = {
  name: "DDD",
  run: function () {
    var that = this;
    var run2 = function () {
      console.log(that.name); // thanh this ham run2 // this la global context
    };
    run2(); //la 1 ham
    // de chay ham phai co ()
  },
};
d.run();

var e = {
  name: "EEE",
  run: function () {
    var run2 = () => {
      //arrow function ko phai la context
      //=> bien 'this' nay chinh la bien this cua ham gan nhat | nen ko can khai bao .bind()
      console.log(this.name); // thanh this ham run2 // this la global context
    };
    run2(); //la 1 ham
    // de chay ham phai co ()
  },
};
e.run();

var question = {
  foo: "bar",
  run: function () {
    setTimeout(
      function () {
        console.log(this.foo);
      }.bind(question),
      1000
    );
    // }.bind(this),1000)
    // }.bind(question),1000)
  },
};
question.run();

var question2 = {
  foo: "bar2",
  run: function () {
    var that = this;
    setTimeout(function () {
      console.log(that.foo);
    }, 1000);
  },
};
question2.run();

var question3 = {
  foo: "bar3",
  run: function () {
    setTimeout(() => {
      console.log(this.foo);
    }, 1000);
  }
};
question3.run();
