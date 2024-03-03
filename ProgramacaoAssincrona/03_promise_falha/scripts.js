let p = Promise.resolve(new Error ("Não deu certo"));

console.log("lalala");

p.then((Value) => console.log(value))
 .catch(reason => console.log("Falhou: " + reason));