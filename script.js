var boton1 = document.querySelector('#boton1');
var boton2 = document.querySelector('#boton2');
var boton3 = document.querySelector('#boton3');

var carta1 = document.querySelector('#carta1');
var carta2 = document.querySelector('#carta2');
var carta3 = document.querySelector('#carta3');

var imagenesNavegador = document.querySelectorAll('div#navegadoresCajas img');
var imagenInicio = document.querySelector('#seccionDerecha img');

var bordeSeleccionado = document.querySelector('.cartaVisible');

carta2.classList.toggle("oculta3");
carta3.classList.toggle("oculta3");

var cartaClickeada = 1;

boton1.addEventListener("click", function() {
  bordeSeleccionado.style.left = "1.4%";
  if(cartaClickeada != 1) {
    carta1.classList.toggle("oculta3");
  }

  carta2.classList.add("oculta3");
  carta3.classList.add("oculta3");

  cartaClickeada = 1;
});

boton2.addEventListener("click", function() {
  bordeSeleccionado.style.left = "34%";
  carta1.classList.add("oculta3");

  if(cartaClickeada != 2) {
    carta2.classList.toggle("oculta3");
  }

  carta3.classList.add("oculta3");

  cartaClickeada = 2;
});

boton3.addEventListener("click", function() {
  bordeSeleccionado.style.left = "66.5%";
  carta1.classList.add("oculta3");
  carta2.classList.add("oculta3");

  if(cartaClickeada != 3) {
    carta3.classList.toggle("oculta3");
  }

  cartaClickeada = 3;
});

new simpleParallax(imagenesNavegador, {
	overflow: true,
  delay: .6,
	transition: 'cubic-bezier(0,0,0,1)',
  orientation: 'down',
  scale: 1.1
});

new simpleParallax(imagenInicio, {
	overflow: true,
  delay: .6,
	transition: 'cubic-bezier(0,0,0,1)',
  orientation: 'right',
  scale: 1.1
});
