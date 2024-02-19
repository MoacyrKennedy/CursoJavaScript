//Adicione a propriedade janelas no ônibus, com o valor de 20;

//Deletar a propriedade rodas;

// Imprima todas as propriedades no console;


let onibus = {
    rodas : 8,
    limitePassageiros : 40,
    portas : 2, 
};
delete onibus.rodas;

console.log(onibus.rodas);

onibus.janela = 20;


console.log(onibus);
console.log(onibus.janela);

