 function verificarNUmero(num) {
   return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log(`o numero é ${num}`));
        } else {
            reject(new Error("Falhou"));
        }
    
    });
 }
 
 verificarNUmero(2);
 verificarNUmero(3);