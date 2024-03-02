const validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("matheu_123"));
console.log(validarNomeUsuario.test("mathe$s"));
console.log(validarNomeUsuario.test("1111111111111"));