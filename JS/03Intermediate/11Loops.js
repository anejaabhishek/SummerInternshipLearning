
const myStates = ["Rajasthan", "Haryana", "Delhi", "Gujarat", 1947, "Karnataka"];

// for (let i = 0; i < myStates.length; i++) {
//     if(typeof myStates[i] != "string")
//         continue;

//     // or we can use "break" instead of "continue", if no further iteration is required

//     console.log(myStates[i]);
// }

let i = myStates.length;

// while (i > 0){
//     i--;
//     console.log(myStates[i]);
// }

do {
    i--;
    console.log(myStates[i]);
} while (i > 0);