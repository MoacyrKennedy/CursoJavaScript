const validaDominio = /[?wwww.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.horadecodar.com.br"));
console.log(validaDominio.test("www.horadecodar"));
console.log(validaDominio.test("google.com"));
