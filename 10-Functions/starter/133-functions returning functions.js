
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey')
greeterHey('Jonas')
greeterHey('Steven')

// Do it in one line
greet('Hello')('Jonas')

// Rewrite the function above using arrow functions
const greetArrow = greet => name => console.log(`${greet} ${name}`)
greetArrow('Hi')('Jonas')