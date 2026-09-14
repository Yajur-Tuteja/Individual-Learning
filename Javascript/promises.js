// const promise = createOrder(cart); //return orderId

// console.log("this"); // {data: undefined}  Meanwhile the promise is in pending state and the value of data is undefined. After the async operation is completed the promise will be resolved and the value of data will be available. All other code will be executed in the meantime. This is the reason why we use promises to handle async operations.

// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });

const GITHUB_API = "https://api.github.com/users/Yajur-Tuteja";

const userPromise = fetch(GITHUB_API);

console.log(userPromise);

userPromise.then(function (data) {
    console.log(data);
});

// callback hell
api.createOrder(cart, function proceedToPayment(orderId) {
    api.proceedToPayment(orderId, function (paymentInfo) {
        api.showOqrderSummary(paymentInfo, function () {
            api.updateWalletBalance();
        })
    });
});

// Promise chaining to avoid callback hell
api.createOrder(cart).then(function (orderId) {
    api.proceedToPayment(orderId);
}).then(function (paymentInfo) {
    api.showOqrderSummary(paymentInfo);
}).then(function () {
    api.updateWalletBalance();
});

// Promise chaining when the next function depends on the previous function's return value
api.createOrder(cart).then(function (orderId) {
    return api.proceedToPayment(orderId);
}).then(function (paymentInfo) {
    return api.showOqrderSummary(paymentInfo);
}).then(function () {
    return api.updateWalletBalance();
});

// using arrow functions to avoid callback hell
api.createOrder(cart).then((orderId) => {
    return api.proceedToPayment(orderId);
}).then((paymentInfo) => {
    return api.showOqrderSummary(paymentInfo);
}).then(() => {
    return api.updateWalletBalance();
});
