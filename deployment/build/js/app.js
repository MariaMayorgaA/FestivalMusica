function iniciarApp(){crearGaleria(),scrollNav(),navegacionFija()}function navegacionFija(){const e=document.querySelector(".header"),n=document.querySelector(".sobre-festival"),t=document.querySelector("body");window.addEventListener("scroll",(function(){n.getBoundingClientRect().top<0?(e.classList.add("fijo"),t.classList.add("body-scroll")):(e.classList.remove("fijo"),t.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault(),seccion=document.querySelector(e.target.attributes.href.value),seccion.scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const i=document.createElement("picture");i.innerHTML=`\n        <source srcset="build/img/thumb/${t}.avif" type="imagen/avif" >\n          <source srcset="build/img/thumb/${t}.webp" type="imagen/webp" >\n          <img\n            loading="lazy"\n            width="200"\n            height="300"\n            src="build/img/thumb/${t}.jpg"\n            alt="imagen">\n            `,i.onclick=function(){n(t)},e.appendChild(i)}function n(e){const n=document.createElement("picture");n.innerHTML=`\n        <source srcset="build/img/grande/${e}.avif" type="imagen/avif" >\n          <source srcset="build/img/grande/${e}.webp" type="imagen/webp" >\n          <img\n            loading="lazy"\n            width="200"\n            height="300"\n            src="build/img/grande/${e}.jpg"\n            alt="imagen">\n            `;const t=document.createElement("DIV");t.appendChild(n),t.classList.add("overlay");const i=document.createElement("P");i.textContent="X",i.classList.add("btn-cerrar"),i.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()},t.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),t.remove()},t.appendChild(i);const c=document.querySelector("body");c.appendChild(t),c.classList.add("fijar-body")}}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map