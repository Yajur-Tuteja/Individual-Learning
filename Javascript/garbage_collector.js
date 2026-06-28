function a() {
    var x = 10;
    var z = 20;
    console.log(z);
    return function b() {
        console.log(x);
    }
}

var y = a();
y();