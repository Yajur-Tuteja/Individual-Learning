const cart = ["shoes", "pants", "kurta", "t-shirt"];

const promise = createOrder(cart); //return orderId

console.log(promise);

// consumer of the promise
promise.then(function (orderId) {
    console.log(orderId);
}).catch(function (err) {
    console.log(err.message);
});

// creating a promise
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = "1234";
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful");
    });
}

function validateCart(cart) {
    return false;
}

// Promise chaining deep dive
// createOrder(cart)
//     .then(function (orderId) {
//         console.log(orderId);
//     })
//     .then(function (orderId) {
//         proceedToPayment(orderId);
//     })
//     .then(function (paymentInfo) {
//         console.log(paymentInfo);
//     })
//     .catch(function (err) {
//         console.log(err.message);
//     });

// Promise chaining when the next function depends on the previous function's return value
// createOrder(cart)
//     .then(function (orderId) {
//         console.log(orderId);
//         return orderId;
//     })
//     .then(function (orderId) {
//         return proceedToPayment(orderId);
//     })
//     .then(function (paymentInfo) {
//         console.log(paymentInfo);
//     })
//     .catch(function (err) {
//         console.log(err.message);
//     });

// error handling in promise chaining
createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    });

