
// Names Function


const person = require("./names.js");
const firstName = "Claudio";
const lastName = "Ferro";
console.log(person(firstName, lastName));

// Hobbies Function

const myHobbiesList = require("./hobbies.js");
const hobbyOne = "Coding";
const hobbyTwo = "Football";
const hobbyThree = "Music";
console.log(myHobbiesList(hobbyOne, hobbyTwo, hobbyThree));

//3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

function personFullInfo() {

    const personInfo = person(firstName, lastName);
    const hobbiesInfo = myHobbiesList(hobbyOne, hobbyTwo, hobbyThree);


    return {
        fullName: personInfo.firstName + " " + personInfo.lastName,
        Hobbies: hobbiesInfo.hobbies[0] + " " + hobbiesInfo.hobbies[1] + " " + hobbiesInfo.hobbies[2],
    }
};

// BONUS

const processArgv = process.argv;
processArgv.push(firstName, lastName, hobbyOne, hobbyTwo, hobbyThree)
console.log(processArgv)
console.log(processArgv[2] ?? "Nessun nome inserito",
    processArgv[3] ?? "Nessun cognome inserito",
    processArgv[4] ?? "Nessun hobby inserito",
    processArgv[5] ?? "Nessun hobby inserito",
    processArgv[6] ?? "Nessun hobby inserito")


