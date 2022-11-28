// Creo la variable del boton mostrar menú
const botonMenu = document.querySelector('.navegacion__boton');
const botonMostrar= document.querySelector('.navegacion__boton--mostrar');
const botonCerrar = document.querySelector('.navegacion__boton--cerrar');
const barraNav = document.querySelector('.navegacion__enlaces');


let menuMostrado = false;
let anchoCliente = window.visualViewport.width;


app();

function app () {
    mostrarMenu();
}


function mostrarMenu () {
    botonMenu.addEventListener('click', function () {
        if (anchoCliente < 768 ) {
            if(menuMostrado===false){
                barraGrande('flex','none','flex')
    
                menuMostrado = true;

                //console.log('Mostrando el menu')
            }else {
                barraGrande('none','flex','none')
                
                menuMostrado = false;
                
                //console.log('ocultando el menu')
            }     
        }       
    })
    window.onresize = function () {
        anchoCliente = window.visualViewport.width;
        if (anchoCliente > 768) {
            barraGrande('flex','none','none');
            //console.log('la barra se va a mostrar dentro de resize')
            menuMostrado = false;
        } else {
            barraGrande('none','flex','none');
            //console.log('la barra se va a ocultar al crecer la pantalla')
            menuMostrado = false;
        }
    } 
    
}


function barraGrande (barra,bMostrar,bCerrar) {
    barraNav.style.display = barra;  
    botonMostrar.style.display = bMostrar;
    botonCerrar.style.display = bCerrar;   
}

