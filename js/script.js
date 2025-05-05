
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


