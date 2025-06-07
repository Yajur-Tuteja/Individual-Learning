function x() {
    // var i = 5;
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000)
        }
        close(i);
    }

    console.log("it");
}

x();