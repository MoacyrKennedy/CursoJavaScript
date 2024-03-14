// window.addEventListener("load", function() {
//     this.alert("Assine os nosso termos de uso");
// });


window.addEventListener("beforeunload", function(e) {
    this.event.returnValue = null;
})