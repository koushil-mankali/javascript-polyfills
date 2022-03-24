let obj = {
    firstName: "koushil",
    lastName: "mankali"
}

function func(country, state) {
    return `The FirstName is ${this.firstName} and the last name is ${this.lastName} and is from country ${country} ${state}`;
}

// Call polyfill
Function.prototype.myCall = function (obj, country, state) {
    obj.func = this;
    return obj.func(country, state)
}

// Apply polyfill
Function.prototype.myApply = function (obj, args) {
    obj.func = this;
    return obj.func(...args);
}

// Bind polyfill
Function.prototype.myBind = function (obj, country, state) {
    obj.func = this;
    return function () {
        return obj.func(country, state);
    };
}

console.log(func.myCall(obj, "Inida", "Telanagna"));
console.log(func.myApply(obj, ["Inida", "Telangana"]));
console.log(func.myBind(obj, "Inida", "Telangana")());
