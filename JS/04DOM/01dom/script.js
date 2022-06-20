var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval( () => {
    if(count <= 1000){
        counter.innerHTML = count;
        count++;
    }
}, 1 );

setTimeout(() => {
    followers.innerHTML = "Followers on Instagram"
}, 3600);