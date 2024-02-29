const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("kenedytere@gmail.com"));
console.log(validarEmail.test("kenedyteregmail"));
console.log(validarEmail.test("kenedytere@gmail.com.br"));
console.log(validarEmail.test("gmail.com"));
