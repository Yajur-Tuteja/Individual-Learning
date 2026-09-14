
// const pr = new Promise(function (resolve, reject) {
//     resolve("Order Created");
// });

// async function fetchData() {
//     return pr;
// }

// need for async await

// using then method
// function getData() {
//     pr.then(function (data) {
//         console.log(data);
//     });
// }

// using async await
// async function getData() {
//     const data = await pr;
//     console.log(data);
// }
// getData();

// async await deep dive
const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Resolved Promise");
    }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Resolved Promise");
    }, 3000);
});

// using then method
// function getData2() {
//     p2.then(function (data) {
//         console.log(data);
//     });
//     console.log("this is it");
// }

// using async await
async function getData2() {
    console.log("Hellow World");

    const val = await p2;
    console.log("this is it");
    console.log(val);

    const val2 = await p1;
    console.log("this is it 2");
    console.log(val2);
}

getData2();