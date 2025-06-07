function outermost(b) {
    function outer() {
        function inner() {
            console.log(a, b);
        }
        // inner();
        // let a = 9;
        return inner;
    }
    return outer
}
let a = 10;
var x = outermost("Yes");
x()();