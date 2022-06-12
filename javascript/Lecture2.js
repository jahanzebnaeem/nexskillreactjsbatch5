// var person1 = prompt("Enter your name");
// var person2 = prompt("Enter your crush");

// var calculatedVal = Math.floor((Math.random() * 100) + 1);

// if (calculatedVal >= 90) {
//     console.log("Allah jodi salamat rakhe");
// } else if (calculatedVal < 90 && calculatedVal >= 70) {
//     console.log("You both are compatibile");
// } else if (calculatedVal < 70 && calculatedVal > 50) {
//     console.log("You both are hopefull");
// } else {
//     console.log("Talash jari rakhe");
// }

// console.log(person1 + " compatibility with " + person2 + " is " + calculatedVal);

// Game every multiple of 3 is replaced with "Fuzz" and every multiple of 5 is replaced with "Buzz"
// Devisible by 3 and 5 is replaced with "FuzzBuzz".

// var i = 10;

// while (i > 1) {
//     console.log("The value of i is " + i);
//     i--;
// }

// for(var i = 1; i < 10; i++) {
//     console.log("The value of i is " + i);
// }

// var a = "Jahanzeb";
// var b = " Naeem";
// console.log(a.indexOf('a'));

partyMembers = ["jahanzeb", "zeeshan", "muneeb", "hamza", "qasim", "awais"];

var personName = prompt("Enter your name");
personName = personName.toLowerCase();
if (partyMembers.includes(personName) == true) {
    console.log("Welcome");
} else {
    console.log("Better luck next time");
}