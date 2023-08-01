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
function invite(people: string[]) {
    for (let index = 0; index < people.length; index++) {
        console.log("it would be very honour for if you come to dinner on 2/August/2023 Mr.", people[index]);
    }
}
// Q15:
// for example Mr.arslan isn't comming so we will remove him from the list
// Lets say we have to send invition now to MR ahmad .
console.log("Mr.",people[1],"will not come to dinner !")
people[1] = "Ahmad";
// Now we will send invition to all the people in the list

console.log("New invition list is :")
invite(people); 

// Q16:
console.log("Table is bigger now !")
people.push('Rajab');
people.push('Ali'); 
people.push('Hassan');
people.unshift('Hussain');
const mean = people.length / 2;
people.splice(mean, 0, 'Faizan'); // adding Faizan in the middle of the list
console.log("SO ! New invition list is ready  :")
invite(people);

// Q17:
