function sayHello(name){
    console.log(`Hello ${name}!, Welcome to our website. Hope you are doing well.`);
}

function byeMessage(name){
    return `Good Bye ${name}, Hope you had a great experience with us.`
}

sayHello("Abhishek");

var goodBye = byeMessage("Vishu");

console.log(goodBye);