document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
    scrollNav();
    navegacionFija();


}
function navegacionFija(){
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');
     const body = document.querySelector('body');

    window.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().top < 0){
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        }
        else{
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
        });
}
function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a'); //Recordar que cuando hay un query selector all no se le puede agregar un addEventlistener
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault(); //ya que al behavior por defecto auto es lo mismo que si lo hiciera con id lo hace rapido
            //console.log(e.target.attributes.href.value);
            seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({behavior: "smooth"});
       
        });
    });
    
}
function crearGaleria(){
    const galeria= document.querySelector('.galeria-imagenes');
    for(let i=1; i<=12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="imagen/avif" >
          <source srcset="build/img/thumb/${i}.webp" type="imagen/webp" >
          <img
            loading="lazy"
            width="200"
            height="300"
            src="build/img/thumb/${i}.jpg"
            alt="imagen">
            `;
            imagen.onclick= function(){
                mostrarImagen(i);
            }
            galeria.appendChild(imagen);
    }

    function mostrarImagen(id){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="imagen/avif" >
          <source srcset="build/img/grande/${id}.webp" type="imagen/webp" >
          <img
            loading="lazy"
            width="200"
            height="300"
            src="build/img/grande/${id}.jpg"
            alt="imagen">
            `;
            // Crea el Overlay con la imagen 
            const overlay = document.createElement('DIV');
            overlay.appendChild(imagen);
            overlay.classList.add('overlay');
            //Boton para cerrar el modal 
            const cerrarModal =document.createElement('P');
            cerrarModal.textContent = 'X';
            cerrarModal.classList.add('btn-cerrar');
            cerrarModal.onclick= function(){
                const body = document.querySelector('body');
                body.classList.remove('fijar-body');
                overlay.remove();// hacer que se cierre la imagen 
            }
            overlay.onclick= function(){
                const body = document.querySelector('body');
                body.classList.remove('fijar-body');
                overlay.remove();// hacer que se cierre la imagen 
            }
            overlay.appendChild(cerrarModal);
            //Anadirlo al HTML
            const body = document.querySelector('body');
            body.appendChild(overlay);
            body.classList.add('fijar-body');
    }
    
}