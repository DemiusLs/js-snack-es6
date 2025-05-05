// Esericizio 1

const biciclette = [
    { nome: "Bianchi Oltre XR4", peso: 7.2 },
    { nome: "Specialized Tarmac SL7", peso: 6.8 },
    { nome: "Cannondale SuperSix EVO", peso: 7.0 },
    { nome: "Trek Emonda SLR", peso: 6.7 },
    { nome: "Pinarello Dogma F", peso: 6 }
];

let biciLight = biciclette[0]
console.log[biciLight]

for (i = 0; i < biciclette.length; i++) {

    console.log(biciclette[i].peso)

    if (biciLight.peso > biciclette[i].peso) {
        biciLight = biciclette[i]
    }

}

console.log(biciLight)

// Esercizio 2

const squadreCalcio = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 }
];

let min = 0
let max = 400

for (i = 0; i < squadreCalcio.length; i++) {
    squadreCalcio[i].puntiFatti = Math.floor(Math.random() * (max - min + 1)) + min;
    squadreCalcio[i].falliSubiti = Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(squadreCalcio);
let newSquadre = [];

for (i = 0; i < squadreCalcio.length; i++) {

    newSquadre[i] = {
        nome: squadreCalcio[i].nome,
        falliSubiti: squadreCalcio[i].falliSubiti,
    }
}

console.log(newSquadre);


// Esercizio 3

function returnInterval(array, num1, num2) {
    const retArray = [];
    for (i = 0; i < array.length; i++) {

        if ((i > num1) && (i <= num2)) {

            retArray.push(array[i])
        }
    }
    return retArray;
}

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 22, 34, 55, 100]
console.log(returnInterval(testArr, 2, 7))