var isEven = (number) => {
    // if(number % 2 === 0)
    //     return true;
    // else
    //     return false;

    // OR

    return (number % 2) === 0;

    // When using arrow function, function must return something.
}

var result = [2, 4, 6, 8].every(isEven);

console.log(result);

// Another way 

    result = [10, 20, 40, 50].every((e) => {return (e%2 === 0);});

    console.log(result);

// Another way 

    result = [10, 20, 40, 50].every((e) => (e%2 === 0));

    console.log(result);