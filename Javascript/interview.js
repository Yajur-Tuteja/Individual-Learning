function x() {
    var i = 5;
    setTimeout(function () {
        console.log(i);
    }, 3000)
    console.log("it");
}

x();