// goal: print elements of an array alternating between capital and lowercase
let stringsArr = ['sierra', 'maurice', 'martin', 'tatiana', 'tareka'];

// toLowerCase() is a special built in function on strings in javascript
// console.log(stringsArr[0].toLowerCase());
// console.log(stringsArr[1].toUpperCase());
// console.log(stringsArr[2].toLowerCase());
// console.log(stringsArr[3].toUpperCase());
// console.log(stringsArr[4].toLowerCase());

// the lines above are not very scalable: if we want to have 100 names instead of
// five, we have a lot of copy and pasting to do. so let's try a loop
// for (let i=0; i<stringsArr.length; i+=2) {
//     console.log(stringsArr[i].toLowerCase());
//     if (i<5) {
//         console.log(stringsArr[i+1].toUpperCase());
//     } else if (i>=5) {
//         break;
//     }
// }

// the code above works but it's not as readable
// for (let i=0; i<stringsArr.length; i++) {
//     // if the remainder of i/2 is 0
//     if (i%2===0) { // if i is even, then lowercase
//         console.log(stringsArr[i].toLowerCase());
//     } else { // if i is odd, then uppercase
//         console.log(stringsArr[i].toUpperCase());
//     }
// }

// the code above does the job, but what if we want to reuse it
// somewhere else or with a different array?
function alternatingStrings(strings) {
    for (let i=0; i<strings.length; i++) {
        // if the remainder of i/2 is 0
        if (i%2===0) { // if i is even, then lowercase
            console.log(strings[i].toLowerCase());
        } else { // if i is odd, then uppercase
            console.log(strings[i].toUpperCase());
        }
    }
}

alternatingStrings(stringsArr);

let stringsArr2 = ['austin', 'elisabeth', 'herman', 'jacob', 'jhasmine', 'reine'];

alternatingStrings(stringsArr2);

function basicRepeatableThing() {
    console.log('sending a notification...');
}

basicRepeatableThing();