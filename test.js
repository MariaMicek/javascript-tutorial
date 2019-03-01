//STRING
var myString = "I\'m a \"fun\" ninja string";

console.log(myString.toUpperCase());

if (myString.indexOf("ninja") === -1) {
    console.log("No ninja in this string. ");
} else {
    console.log("The word ninja starts at position " 
    + myString.indexOf("ninja"));
}

var string1 = "abc";
var string2 = "bcd";
console.log(string1 === string2); //false
console.log(string1 < string2); //true

var string1 = "abc";
var string2 = "ABC";
console.log(string1.toUpperCase() === string2); //true
console.log(string1 < string2); //false

//slice method
var stringSlice = "hello world";
var stringSlice2 = stringSlice.slice(2,8);
var stringSlice3 = stringSlice.slice(3);
console.log(stringSlice);
console.log(stringSlice2);
console.log(stringSlice3);

//split method
var tags = "banana, apple, orange, berry";
var tagsArrey = tags.split(",");
console.log(tags);
console.log(tagsArrey);