let name = {
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

let printFullName = function (home) {
    console.log(this.firstName + " " + this.lastName + "from" + home);
}
printFullName.call(name, "Delhi");


