function receivesAFunction(thing) {
    return thing();
}

function returnsANamedFunction() {
    return function foo() {
        console.log('Yay!');
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Anonymous');
    }
}