

// Srvicio 1
var servicio = document.getElementById('linea1');
var titulo = document.getElementById('titulo1');
var div = document.getElementById('lienacien');
servicio.addEventListener("click",()=>{
      
   mostrar();
   servicio.style.background='#9c9c9c'

});


function mostrar() {
   div.style.display = '';
   titulo.style.display='';
}


function cerrar(){
  div.style.display='none';
  titulo.style.display='none';
}


// servicio 2

var serv2 = document.getElementById('linea2');

serv2.addEventListener("click", ()=>{
        
   cerrar();
   servicio.style.background='';
});