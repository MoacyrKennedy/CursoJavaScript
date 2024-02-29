const reg = /\w+: (Matheus|joão|Maria)/; //Nome: nadsuasudi

console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: Jose"));
console.log(reg.test("Nome: Maria"));