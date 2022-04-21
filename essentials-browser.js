
/* DOM ------------------------------------------------------------------------------------------------------------------- */

/*
<h1 id="encabezado"> Titulo </h1>
<section id="miseccion">
<div id="mi caja" class="carton"> Soy una caja </div> 
<div id="mi caja2" class="plastico"> Soy otra caja </div> 
<input type="text" name="nombre" id="nombre" /> <br/>
</section>;
*/

// Conseguir elementos
const tituloId = document.getElementById("mi caja");				    //Conseguir elementos con un ID concreto
const cajaDiv = document.getElementsByTagName("div");				    //Conseguir elementos por su etiqueta
const cajaClase = document.getElementsByClassName("carton");		//Conseguir elementos por su clase


// Query selector 
const seleccionarId = document.querySelector("#encabezado");
const seleccionarEtiqueta = document.querySelector("input");
const seleccionarClase = document.querySelector(".plastico");
const elements = document.querySelectorAll("div");
Array.from(elements);


// Acceder al contenido
const nombre = document.querySelector("#nombre");
nombre.value;
const todosLosDivs = document.getElementsByTagName('div');
const cajaDos = todosLosDivs[1].textContent;
console.log(cajaDos);         //Outputs: Soy otra caja


// Modificar contenido
const caja = document.getElementById("mi caja2");
console.log(document.getElementById("mi caja2").innerHTML); // Outputs: Soy otra caja       
caja.innerHTML = "Ahora soy un tupper";
console.log(caja.innerHTML);  // Outputs: Ahora soy un tupper


// Crear elementos del DOM
const hr = document.createElement("hr");
const parrafo = document.createElement("p");
const texto = document.createTextNode("nuevo texto");
const seccion = document.querySelector("#miseccion");
parrafo.append(texto);
seccion.appendChild(parrafo);
seccion.prepend(hr);
const enlace = document.createElement('a');
enlace.textContent = 'Nuevo Enlace';
enlace.href = 'www.google.com';
enlace.setAttribute('data-enlace', 'nuevo-enlace');
parrafo.insertBefore(enlace, texto);  // insert enlace element before texto element


// Style
parrafo.style.backgroundColor = 'red';
parrafo.style.fontFamily = 'Arial';


// Class List
caja.classList.add('nueva-clase', 'segunda-clase');
console.log(caja.classList.contains('nueva-clase'))  // true
caja.classList.remove('segunda-class');
caja.classList.replace("nueva-clase", "bar");   // replace class "nueva-clase" with class "bar"


// Traversing the DOM
/*
<div id="parent">
  <p id="child">Child text</p>
  <p>Sibling</p>
</div>
*/
let parent = document.getElementById('parent');
let child = document.getElementById('child');

// From parent
parent.children[0].textContent;  // Child text
parent.firstElementChild;  // <p id="child">Child text</p>
parent.lastElementChild;   // <p>Sibling</p>
// From child
child.parentElement; // <div id="parent"><p id="child">Child text</p><p>Sibling</p></div>
// From sibling
child.nextElementSibling;  // <p> Sibling </p>


// Eliminar elementos del DOM
parent.remove();  // remove element (with childrens)
parent.removeChild(parent.children[1]);   // remove child from parent



/* BOM ------------------------------------------------------------------------------------------------------------------- */

function getBom() {
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  console.log(screen.height)
  console.log(screen.width);
}

function redirect(url) {
  window.location.href = url;
}

function abrirVentana(url) {
  window.open(url);
}

function redirectReplace() {
  window.location.replace("http://www.w3schools.com");
}



/* EVENTS ------------------------------------------------------------------------------------------------------------------- */

/*
<button id="boton"> Presioname </button>
<form> <input type="text" name="nombre" id="campo_nombre"/> </form>
*/
const boton = document.querySelector("#boton");
const input = document.querySelector("#campo_nombre");

function cambiarColor() {
  boton.style.background = "green";
  console.log(input.value);
}

// Click
boton.addEventListener('click', () => cambiarColor());

// Mouse over
boton.addEventListener('mouseover', () => cambiarColor());

// Mouse out
boton.addEventListener('mouseout', () => cambiarColor());

// Focus
input.addEventListener('focus', function() {
  console.log("(focus) Estas dentro del input");
});

// Scroll
window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  const elem = document.getElementById('elem');
  let ubicacion = elem.getBoundingClientRect();
  if(ubicacion.top < 784){
    console.log('element reached');
  }
})

// Mousemove
document.onmousemove = function(e){
  mouseX = e.offsetX;
  mouseY = e.offsetY;
  console.log(mouseX, mouseY);
}

// Blur
input.addEventListener('blur', function() {
  console.log("(blur) Estas fuera del input");
});

// Keydown
document.addEventListener("keydown", function(e){
  let key = e.key
  console.log("(keydown) Estas pulsando esta tecla " + key);
});

// Keypress
input.addEventListener('keypress', function(event) {
  console.log("(keypress) Tecla presionada ", String.fromCharCode(event.keyCode));
});

// Keyup
input.addEventListener('keyup', function(event) {
  console.log("(keyup) Tecla soltada", String.fromCharCode(event.keyCode));
});

//Event Bubbling
child.addEventListener('click', (e) => {
  e.stopPropagation();
})
