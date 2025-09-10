//TASK 1

function add(a, b) {
    if (a === undefined) a = 0;
    if (b === undefined) b = 0;
    return a + b;
}
function subtract(a = 0, b = 0) {
    return a - b;
}
function multiply(...args) {
    if (args.length === 0) return 0; 
    let result = 1;
    for (let num of args) {
        result *= num;
    }
    return result;
}
function divide() {
    if (arguments.length === 0) return 0;
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] === 0) {
            console.log("Cannot divide by zero!");
            return undefined;
        }
        result /= arguments[i];
    }
    return result;
}
console.log("Add: ", add(5));         
console.log("Subtract: ", subtract(10));
console.log("Multiply: ", multiply(2, 3, 4)); 


//TASK 2
/*
function SolveThis(obj) {
    var res = {}; 

    for (var key in obj) {
        var values = obj[key];

        if (key === "sum") {
            var total = 0;
            for (var i = 0; i < values.length; i++) {
                total += values[i];
            }
            res[key] = total;
        }
        else if (key === "max") {
            var maximum = values[0];
            for (var i = 1; i < values.length; i++) {
                if (values[i] > maximum) maximum = values[i];
            }
            res[key] = maximum;
        }
        else if (key === "min") {
            var minimum = values[0];
            for (var i = 1; i < values.length; i++) {
                if (values[i] < minimum) minimum = values[i];
            }
            res[key] = minimum;
        }
        else {
            res[key] = values;
        }
    }

    return res;
}
var result = SolveThis({
    sum: [3,2,4],
    max: [2,4,3,5],
    min: [5,3,4,3]
});
console.log(result);*/

