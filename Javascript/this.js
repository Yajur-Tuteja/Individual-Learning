// "use strict"

// this in global space

console.log(this) //globalObject


// this in function

function x() {
    // the value depends on strict and non-strict mode
    console.log(this);
}

// this in strict mode(this substitution)
// If this = undefined or null then due to this substitution this keyword will be replaced with globalObject
x();
window.x();

// value of this keyword depends upon how the function is called

// this keyword inside a method
const obj = {
    a: 10,
    z: function() {
        console.log(this);
    }
}

obj.z();

// call apply and bind

const student = {
    name: "Yajur",
    age: "24",
    printName: function() {
        console.log(this.name)
    }
}

const student2 = {
    name: "Shreya",
    age: "21",
}

student.printName();
student.printName.call(student2); // value of this = student2

// arrow function

const objects = {
    a: 10,
    xy: () => {
        console.log(this)
    }
}
objects.xy();

const objects2 = {
    a: 10,
    xy: function() {
        const yz = () => {
            console.log(this)
        }
        yz();
    }
}
objects2.xy();