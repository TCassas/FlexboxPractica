var pregunta1 = document.getElementById('pregunta1');
var pregunta2 = document.getElementById('pregunta2');
var pregunta3 = document.getElementById('pregunta3');
var pregunta4 = document.getElementById('pregunta4');

pregunta1.classList.toggle("preguntaOculta3");
pregunta2.classList.toggle("preguntaOculta3");
pregunta3.classList.toggle("preguntaOculta3");
pregunta4.classList.toggle("preguntaOculta3");

var flechita1 = document.getElementById("flechita1");
var flechita2 = document.getElementById("flechita2");
var flechita3 = document.getElementById("flechita3");
var flechita4 = document.getElementById("flechita4");

flechita1.addEventListener('click', function() {
  pregunta1.classList.toggle("preguntaOculta3");
  flechita1.classList.toggle("flechitaRespuesta");
});

flechita2.addEventListener('click', function() {
  pregunta2.classList.toggle("preguntaOculta3");
  flechita2.classList.toggle("flechitaRespuesta");
});

flechita3.addEventListener('click', function() {
  pregunta3.classList.toggle("preguntaOculta3");
  flechita3.classList.toggle("flechitaRespuesta");
});

flechita4.addEventListener('click', function() {
  pregunta4.classList.toggle("preguntaOculta3");
  flechita4.classList.toggle("flechitaRespuesta");
});

/*
var preguntas1 = document.querySelector('#preguntasJS article p:nth-of-type(1)');
var preguntas2 = document.querySelector('#preguntasJS article p:nth-of-type(2)');
var preguntas3 = document.querySelector('#preguntasJS article p:nth-of-type(3)');
var preguntas4 = document.querySelector('#preguntasJS article p:nth-of-type(4)');
*/
