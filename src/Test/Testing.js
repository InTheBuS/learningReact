/*function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

console.log(sum(1)(2) ())
console.log(sum(5)(-1)(2) ())
console.log(sum(6)(-1)(-2)(-3) ())
console.log(sum(0)(1)(2)(3)(4)(5) ())*/


function sum(firstArg, opt_argsStack) {
    const argsStack = (opt_argsStack || []).concat([firstArg]);
    const nextSum = nextArg => sum(nextArg, argsStack);
    nextSum.toString = () => argsStack.reduce((a, b) => a + b);

    return nextSum;
}


function makeWorker() {
    let name = "Pete";

    return function() {
        console.log(name);
    };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)







/*



const add2 = a => b => a + b;

console.log(add2(2)(5));

const Sum = a => b => b ? Sum(a + b) : a;

console.log(Sum(3)(4)(2)(5)()); //14

console.log(Sum(3)(4)(1)()); //8

const qwe = a => b => b ? qwe(a+b) : a;

console.log(qwe(1)(2)(3)(5)());*/
