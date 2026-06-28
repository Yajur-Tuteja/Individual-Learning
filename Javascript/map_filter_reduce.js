const arr = [5, 1, 3, 2, 6]


const output = arr.map((x) => x.toString(2));

const output2 = arr.filter(isOdd);

const output3 = arr.reduce(function (acc, curr) {
    if (curr > acc) {
        acc = curr;
    }
    return acc;
}, 0)

function isOdd(x) {
    // console.log(x % 2);
    return x % 2 !== 0;
}

// function findMax(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(output3);

// console.log(output2);


const users = [
    { firstName: "Roman", lastName: "Reigns", age: 40 },
    { firstName: "Seth", lastName: "Rollins", age: 38 },
    { firstName: "Dean", lastName: "Ambrose", age: 39 },
    { firstName: "Drew", lastName: "Mcintyre", age: 40 }
]

// list of full names

const fullNames = users.map(function (user) {
    return user.firstName + ' ' + user.lastName
});

// console.log(fullNames)

const obj = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age]++;
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})

// console.log(obj);

const filtered = users.filter((x) => x.age >= 40).map((x) => x.firstName)

// const reduced = users.reduce(function (acc, curr) {
//     if (curr.age >= 40) {
//         acc.push(curr.firstName)
//     }
//     return acc;
// }, [])

// console.log(filtered)
// console.log(reduced)

Array.prototype.repo = function(fn, init) {
    let res = init;
    for(let i = 0; i< this.length; i++) {
        res = fn(res, this[i]);
    }
    return res;
}

const polyfill = users.repo(function (acc, curr) {
    if (curr.age >= 40) {
        acc.push(curr.firstName)
    }
    // console.log(acc)
    return acc;
}, [])

const youngest = users.repo(function (acc, curr) {
    if (curr.age < acc.age) {
        acc = curr
    }
    return acc;
}, users[0])

console.log(youngest);
console.log(polyfill);