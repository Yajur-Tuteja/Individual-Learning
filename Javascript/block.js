// const c = 100;
// function x() {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// x();
// console.log(b);
// console.log(b);
// console.log(c);


// let a = 10;
// function z() {
//     var a = 20;
// }

const a = 100;
{
    const a = 200;
    {
        const a = 300;
        console.log(a);
    }
    console.log(a);
}
console.log(a);
