//   spread and rest operator


function sumOne(a, b) {
    return a + b;
}

var myA = [5, 4];

console.log(sumOne(myA));

// the above code will not run in a fine manneras the type is different
// we can make it work in the following way :

console.log(sumOne(...myA));

// the above code will work due to spread operator being used

// now if 
myA = [5, 4, 1];

console.log(...myA);

// the above one is called spread operator

// the output of the above code will be same as the previous one 
// as the function sumOne will only consider the first 2 values



// function using "rest" operator :


function sumAll(...args){
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}


// the above function with rest operator will convert all the values of hte argument into individual values
// and put those values in an array

// when this operator like above is used, it will always convert the argument into an array


console.log(sumAll(2, 3, 4, 5));


// now if we want to do a specific thing with some initial elements


function productFirstTwoAndSumElse(a, b ,...args){
    const product = a * b;
    
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return [product, sum];
}

console.log(productFirstTwoAndSumElse(2, 3, 4, 5, 6, 7, 8));

// the above code will multiply the first two elements and then sum all else