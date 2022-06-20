//Use ()

var listingPrice = 799;
var discountedPrice = 299;

var discountPercentage = ((listingPrice - discountedPrice)/listingPrice)*100;

console.log(discountPercentage);

var discountPercentRoundedOff = Math.round(discountPercentage);

console.log(discountPercentRoundedOff + "%");