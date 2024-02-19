//Crie dois arrays, um com mais de 5 elementos e outro com menos;

//Faça uma função que verifica o número de elementos;

// Se possuir menor que 5, imprima "Poucos elemntos" no console;

//Se tiver mais, imprima "Muitos elementos"


let names = ["Moacyr","Eric","Leo","Duda","João"]

let idades = [28,27,15]

function verificaElementos(arr) {
    if(arr.length >= 5) {
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
}

verificaElementos(names);
verificaElementos(idades);