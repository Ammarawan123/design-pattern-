function officer(amount, next) {
    if (amount <= 50000) {
        return `Officer approved loan of Rs.${amount}`;
    }
    return next(amount);
}

function manager(amount, next) {
    if (amount <= 200000) {
        return `Manager approved loan of Rs.${amount}`;
    }
    return next(amount);
}

function director(amount) {
    return `Director approved loan of Rs.${amount}`;
}

function approveLoan(amount) {
    return officer(amount, (amount) =>
        manager(amount, (amount) =>
            director(amount)
        )
    );
}

console.log(approveLoan(30000));
console.log(approveLoan(100000));
console.log(approveLoan(500000));