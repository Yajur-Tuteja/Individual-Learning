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
    console.log(this.firstName + " " + this.lastName + " from " + home + " , " + state);
}
printFullName.call(name1, "New Delhi", "Delhi");
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

// Bind Method

let printMyName = printFullName.bind(name2,"Mumbai", "Maharashtra")

// console.log(printMyName);
// printMyName();
// printMyName();

// polyfill for bind

Function.prototype.mybind = function(target,...args) {
    obj = this; 
    console.log(args);
    return function() {
        obj.call(target,...args);
    }
} 

let printMyName2 = printFullName.mybind(name1,"Chandigarh","Punjab")
printMyName2()


