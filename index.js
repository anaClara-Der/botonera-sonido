
let letras = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];

document.addEventListener("keydown", function(e){
   let codigo = (e.keyCode || e.which);//en esta variable se guardan los valores numericos de las teclas
   codigo = String.fromCharCode(codigo);//esos valores se convierten en la letra correspondiente en el teclado
   console.log(codigo);
   let audio = document.querySelector("."+ codigo);
   let botones = document.querySelector(".box"+codigo);
   
   letras.forEach(function(letra){
      if (codigo == letra){
         botones.classList.add("active");
         console.log(audio);
         audio.currentTime = 0; // para que al presionar la tecla vuelva a empezar desde el seg 0 el audio
         audio.play();
      }
   })
   let caja = document.querySelectorAll(".cajas");
   caja.forEach(cajas => cajas.addEventListener("transitionend", removeTransition)); //Para sacar el efecto cuando no se esta clickeando 

})

// esta funcion permite hacer que se remueva la clase active cuando se clickea
function removeTransition(e){
   if (e.propertyName !== "transform")return;
   this.classList.remove("active")
}

 



