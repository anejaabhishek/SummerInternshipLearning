var myMap = new Map();

myMap.set(1, "One");
myMap.set(2, "Two");
myMap.set(3, "Three");
myMap.set(4, "Four");
myMap.set(5, "Five");

console.log(myMap);

// for(let key of myMap.keys()){
//     console.log(`Key is ${key}`);
// }

// for(let value of myMap.values()){
//     console.log(`Value is ${value}`);
// }

for(let [key, value] of myMap){
    console.log(`Key is ${key} and Value is ${value}`);
}

// ******

// "for of"  always give the key first
// whereas "for each" will always give value first
// and in "for each" if we only ask for one value, it will always return key no matter even if you use ${value}

// ******

myMap.forEach( (value) => console.log(`${value}`));

// the above code will not return value, it will return key, as stated above

// if want both, then do in the following manner


myMap.forEach( (v, k) => console.log(`${v} is value and ${k} is key`));


myMap.delete(3);

console.log(myMap);

