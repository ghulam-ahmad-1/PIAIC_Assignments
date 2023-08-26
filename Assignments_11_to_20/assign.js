"use strict";
// Q11:
let names = ["Waleed", "arslan", "Muneeb"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
// Q12:
console.log("Hello ! " + names[0], 'How are you bro ?');
console.log("Hello ! " + names[1], 'How are you bro ?');
console.log("Hello ! " + names[2], 'How are you bro ?');
// Q13:
let car = ["Toyota", "Honda", "Suzuki", "Audi"];
console.log('I Like the Brand named :', car[0], "there models are good and reliable");
console.log('The motor cycles of  :', car[1], "reliable");
console.log('Cars of :', car[2], "are like Average not that good but yeah some of them are good !");
console.log('The cars of :', car[3], "are good but expensive !");
// Q14:
let people = ["Waleed", "arslan", "Muneeb"];
function invite(people) {
    for (let index = 0; index < people.length; index++) {
        console.log("it would be very honour for if you come to dinner on 2/August/2023 Mr.", people[index]);
    }
}
// Q15:
// for example Mr.arslan isn't comming so we will remove him from the list
// Lets say we have to send invition now to MR ahmad .
console.log("Mr.", people[1], "will not come to dinner !");
people[1] = "Ahmad";
// Now we will send invition to all the people in the list
console.log("New invition list is :");
invite(people);
// Q16:
console.log("Table is bigger now !");
people.push('Rajab');
people.push('Ali');
people.push('Hassan');
people.unshift('Hussain');
const mean = people.length / 2;
people.splice(mean, 0, 'Faizan'); // adding Faizan in the middle of the list
console.log("SO ! New invition list is ready  :");
invite(people);
// Q17:
// checking the length if list : 
console.log("Dinner table won’t arrive in time for the dinner, and now I have space  for 2 space for only two guests.");
console.log(people.length);
console.log(people);
console.log(people.pop(), "I am  sorry you can’t invite you to dinner.");
console.log(people.pop(), "I am  sorry you can’t invite you to dinner.");
console.log(people.pop(), "I am  sorry you can’t invite you to dinner.");
console.log(people.pop(), "I am  sorry you can’t invite you to dinner.");
console.log(people.pop(), "I am  sorry you can’t invite you to dinner.");
console.log(people.pop(), "I am  sorry you can’t invite you to dinner.");
console.log(people.length);
// Copying the list to another list :
let people2 = [...people];
for (let x = 0; x < people.length; x++) {
    console.log(people[x], "! you are still invted to dinner ! ");
}
people.pop();
people.pop();
console.log("Length of the List : ", people.length, "Empty List !");
// Q18 :
let places = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
console.log(places);
const sortedPlaces = [...places];
sortedPlaces.sort((a, b) => a.localeCompare(b));
console.log("Sorted List : ", sortedPlaces);
console.log("Original List : ", places);
console.log("Reverse List : ", sortedPlaces.reverse());
console.log("Original List : ", places);
// Reversing my original list  :
console.log("Original List is Reversed now : ", places.reverse());
console.log("Its back to normal now : ", places.reverse());
console.log(" Orignal Sorted List : ", places.sort());
console.log("reverse orderd Sorted list : ", places.reverse());
//Q19: 
console.log("The number Of people invited to dinner are : ", people2.length);
// Q20:
// Think of something you could store in a array. For example, you could make 
// a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let mountains = ["K2", "Everest", "Nanga Parbat", "Himalaya", "Karakoram"];
console.log(mountains);
