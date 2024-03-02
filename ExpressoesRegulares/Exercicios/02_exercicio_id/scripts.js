const validarId = /\d+ID\b/;

console.log(validarId.test("384294ID"));
console.log(validarId.test("384294"));
console.log(validarId.test("asdsadas"))
console.log(validarId.test("ID"))