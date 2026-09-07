let name1 = {
    firstName: "Yajur",
    lastName: "Tuteja",
    // printFullName: function () {
    //     console.log(this.firstName + " " + this.lastName);
    // }
}

let name2 = {
    firstName: "YAK",
    lastName: "YAK"
}

// function borrowing
// name.printFullName.call(name2);

let printFullName = function (home, state) {
    console.log(this.firstName + " " + this.lastName + " from " + home + ", " + state);
}
printFullName.call(name1, "New Delhi", "Delhi");
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

// Bind Method

let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra")

// console.log(printMyName);
// printMyName();
// printMyName();

// polyfill for bind 

Function.prototype.mybind2 = function (...args) {
    let obj = this;
    console.log(obj, args);
    return function () {
        console.log(this);
        obj.call(args[0]);
    }
}

let printMyName2 = printFullName.mybind2(name1);
printMyName2();

Function.prototype.mybind3 = function (obj, ...args) {
    let obj2 = this;
    console.log(obj, args);
    return function () {
        console.log(this);
        obj2.call(obj, ...args);
    }
}

let printMyName3 = printFullName.mybind3(name2, "Mumbai", "Maharashtra");
printMyName3()

Function.prototype.mybind4 = function (obj, ...args) {
    let obj3 = this;
    console.log(obj, args);
    return function (...args2) {
        console.log(this);
        obj3.call(obj, ...args, ...args2);
    }
}

let printMyName4 = printFullName.mybind4(name2, "Rohtak");
printMyName4("Haryana")

let printMyName5 = printFullName.bind(name1, "Jalandhar");
printMyName5("Punjab");

