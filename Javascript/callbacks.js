// Callback function in javascript

setTimeout(function () {
    console.log("timer");
}, 10000);

function x(y) {
    y();
    console.log("x");
    y();
}

x(function y() {
    console.log("y");
})


// function attachEventListeners() {
//     let count = 0;
//     document.getElementById("useMe")
//         .addEventListener("click", function xyz() {
//             console.log("This", ++count);
//         });
// }
// attachEventListeners();

// let count = 0;
// document.getElementById("useMe")
//     .addEventListener("click", function xyz() {
//         console.log("This", ++count);
//     });

const cart = ["shoes", "pants", "kurta", "t-shirt"];

api.createOrder()

api.proceedToPayment()

// callback hell
api.createOrder(cart, function proceedToPayment() {
    api.proceedToPayment(function () {
        api.showOqrderSummary(function () {
            api.updateWalletBalance();
        })
    });
});