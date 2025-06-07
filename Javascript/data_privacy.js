function Count() {
    var counter = 0;

    this.incCounter = function () {
        counter++;
        console.log(counter);
    }

    this.decrementCounter = function () {
        counter--;
        console.log(counter)
    }
}

var counter1 = new Count();

counter1.incCounter();
counter1.incCounter();
counter1.decrementCounter();