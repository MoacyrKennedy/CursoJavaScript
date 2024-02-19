let pessoa = {
    "nome": "Matheus",
    "idade": 28,
    "Profissao": "Programador",
    "hobbies":["Video game","Leitura","Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSon = JSON.parse(pessoaTexto);

console.log(pessoaJSon);

console.log(pessoaJSon.hobbies[0]);