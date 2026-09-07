// const promise = createOrder(cart); //return orderId

// console.log("this"); // {data: undefined}  Meanwhile the promise is in pending state and the value of data is undefined. After the async operation is completed the promise will be resolved and the value of data will be available. All other code will be executed in the meantime. This is the reason why we use promises to handle async operations.

// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });

const GITHUB_API = "https://api.github.com/users/Yajur-Tuteja";

const userPromise = fetch(GITHUB_API);

console.log(userPromise);  