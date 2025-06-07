function a() {
    var x = 10;
    return function b() {
        console.log(x);
    }
}

var y = a();
y();