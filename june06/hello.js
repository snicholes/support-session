let message = 'hello';

console.log(message);

let message2 = 'world';

console.log(message2);

let messagesArr = ['hello', 'world', '!'];

for (let i = 0; i < messagesArr.length; i++) {
    console.log(messagesArr[i]);
}

let messagesArr2 = ['my name is sierra', 'nice to meet you'];

for (let i = 0; i < messagesArr2.length; i++) {
    console.log(messagesArr2[i]);
}

console.log(message2);

// this function's job is to print each message from
// an array of messages
// this function's parameter is the array of messages
// that it should be printing. parameters should be
// whatever information the function needs to know
// in order to do its job.
function printMessages(arrayOfMessages) {
    let functionVar = 'a function-scope variable';
    // arrayOfMessages is a parameter so it is also a function-scope variable
    for (let i = 0; i < arrayOfMessages.length; i++) {
        console.log(arrayOfMessages[i]);
        // myVar is function-scope even though it's inside of a loop,
        // because it was declared with the var keyword
        var myVar = 'hello';
    }
}

// can't run these because they are out of scope if they are not
// being used inside of the function where they were defined
//console.log(arrayOfMessages);
//console.log(functionVar);


// not only is this easier to reuse (the only thing we need to change
// is the argument/parameter that is passed in), but it's also easier
// to read because it's shorter and more descriptive
printMessages(messagesArr);
printMessages(messagesArr2);

// if you're copying/pasting code multiple times within your code
// or you're doing something that is almost exactly the same multiple
// times, you may want a loop or a function

// loop: doing the repetition in one spot in the code (nothing is in between
// each repetition) and the values you need are more set in stone
// for example - printing values from the same array one after another

// function: repeating the code in multiple places throughout the code
// and/or if the information needed is slightly different
// for example - printing values from different arrays and/or at different
// times throughout the code

let otherArr = ['my trainer is eric', 'my curriculum is jwa'];
printMessages(otherArr);

let x = 5;
if (x < 10) {
    let localVar = 'i\'m a local/block-scope variable';
    abc = 'this is global because it is created without a keyword';
}
// can't access the variable anymore because it was
// only accessible in the block that it was defined in
//console.log(localVar);

// global scope variables: variables that either are defined outside of any block or function,
// OR variables that are declared without a keyword regardless of where they are defined

// function scope variables: variables that are defined inside of a function but not inside of
// any particular block OR variables that are declared with the "var" keyword

// block/local/loop scope variables: variables defined with the "let" or "const" keyword within
// a block (like an if statement, loop, switch statement, etc)