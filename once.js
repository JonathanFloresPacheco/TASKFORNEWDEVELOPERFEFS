const once = (fn) => {
    let result;
    let called = false;

    return function(...args) {
        if (!called) {
            result = fn.apply(this, args);
            called = true;
        }
        return result;
    };
};

// Ejemplo de uso para consola
const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const onceSum1 = once(sum);
const onceSum2 = once(sum);
const oncemult1 = once(mul);
const oncemult2 = once(mul);
const oncediv1 = once(div);
const oncediv2 = once(div);


console.log(onceSum1(1, 3)); // => 4
console.log(onceSum1(5, 3)); // => 4
console.log(onceSum2(2, 7)); // => 9
console.log(onceSum2(5, 2)); // => 9

console.log(oncemult1(1, 3)); // => 3
console.log(oncemult1(5, 3)); // => 3
console.log(oncemult2(2, 7)); // => 14
console.log(oncemult2(5, 2)); // => 14

console.log(oncediv1(4, 2)); // => 2
console.log(oncediv1(5, 3)); // => 2
console.log(oncediv2(14, 7)); // => 2
console.log(oncediv2(5, 2)); // => 2