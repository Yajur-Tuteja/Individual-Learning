let arr = ["Ya", "Tu"]

let obj = {
    name: "Yajur",
    city: "Delhi",
    getInfo: function () {
        console.log(this.name + " from " + this.city)
    }
}

function fun() {
    //
}

let object2 = {
    name: "YAK"
}

// Never do this
object2.__proto__ = obj

Function.prototype.mybind = function () {
    console.log("This is it");
}

