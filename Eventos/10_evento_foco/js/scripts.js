let input = document.querySelector("#input1");

input.addEventListener("focus", function() {

    console.log("Entou no input");

})

input.addEventListener("blur", function() {

    console.log("Saiu do input");
    
})