var z;
var d = 100
function outermost(b) {
    let c = 9;
    z = 10;
    function outer() {
        let e = 20;
        z = inner;
        function inner() {
            // z = 9;
            console.log(a, b, c, d, e);
        }
        inner();
        d = 200;
        return inner;
    }
    return outer
}
let a = 10;
var x = outermost("Yes")();
console.log(x);
x();
console.log(z);
z();
