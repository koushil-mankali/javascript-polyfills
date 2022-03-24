let obj = {
    firstName: "koushil",
    lastName: "mankali"
}

function func(...params) {
    return `The FirstName is ${this.firstName} and the last name is ${this.lastName} and is from country ${params[0]} ${params[1]}`;
}

// Call polyfill
Function.prototype.myCall = function (...args) {
    const obj = args[0]
    const params = args.slice(1);
    obj.func = this;
    return obj.func(...params)
}

// Apply polyfill
Function.prototype.myApply = function (...args) {
    const obj = args[0];
    obj.func = this;
    return obj.func(...args[1]);
}

// Bind polyfill
Function.prototype.myBind = function (...args) {
    const obj = args[0];
    const params = args.slice(1);
    obj.func = this;
    return function () {
        return obj.func(...params);
    };
}

console.log(func.myCall(obj, "Inida", "Telanagna"));
console.log(func.myApply(obj, ["Inida", "Telangana"]));
console.log(func.myBind(obj, "Inida", "Telangana")());
