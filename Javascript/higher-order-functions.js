const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const calculate = function (radius, formula) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(formula(radius[i]));
    }
    return output;
}

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

Array.prototype.calc = function (formula) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(formula(this[i]));
    }
    return output;
}

// console.log(radius.calc(area))
// console.log(radius.calc(circumference))
// console.log(radius.calc(diameter))

console.log(radius.map(area))
console.log(radius.map(circumference))
console.log(radius.map(diameter))