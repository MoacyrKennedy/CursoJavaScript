/*
Crie uma classe que simule um carrinho;
Propriedades: marca, cor, gasolina restante;
Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente;
E um de abastecer para aumentar a gasolina quando necessário;
*/

class Carro {
   constructor(marca, cor, gasolinaRestante, consumo) {
      this.marca = marca;
      this.cor = cor;
      this.gasolinaRestante = gasolinaRestante;
      this.consumo = consumo;
   }

   dirigir(km) {
      
      let litrosConsumidos = km / this.consumo;

      this.gasolinaRestante -= litrosConsumidos;
   }

   abastecer(litros) {
      this.gasolinaRestante += litros;
   }
}

let carro = new Carro("VW", "Cinza", 100, 14);

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(10);
console.log(carro);
