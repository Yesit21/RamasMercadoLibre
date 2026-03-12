// Manejo de búsqueda y UI ligera (sin alertas)
function buscar() {
    const campo = document.getElementById('campoBusqueda');
    const msg = document.getElementById('busquedaMensaje');
    const texto = campo ? campo.value.trim() : '';
    if (msg) msg.textContent = '';

    if (!texto) {
        if (msg) msg.textContent = 'Ingrese un producto para buscar';
        if (campo) campo.focus();
        return;
    }

    const productos = document.querySelectorAll('.producto-card');
    if (!productos || productos.length === 0) {
        if (msg) msg.textContent = 'No hay productos disponibles para buscar en esta página.';
        return;
    }

    let encontrados = 0;
    productos.forEach(function(producto) {
        const nombreEl = producto.querySelector('.producto-nombre');
        const nombre = nombreEl ? nombreEl.textContent.toLowerCase() : '';
        if (nombre.includes(texto.toLowerCase())) {
            producto.style.display = '';
            encontrados++;
        } else {
            producto.style.display = 'none';
        }
    });

    if (encontrados === 0 && msg) {
        msg.textContent = `No se encontraron productos para: ${texto}`;
    }
}

// Soporta botón del header para búsqueda
document.getElementById('btnBuscar')?.addEventListener('click', function(e) {
    e.preventDefault();
    buscar();
});

// Menú móvil: alterna visibilidad de .acciones
document.querySelector('.menu-toggle')?.addEventListener('click', function() {
    const acciones = document.querySelector('.acciones');
    if (!acciones) return;
    const abierto = acciones.classList.toggle('acciones--open');
    this.setAttribute('aria-expanded', abierto ? 'true' : 'false');
});

// Cookie banner: ocultar al aceptar
document.getElementById('cookieAccept')?.addEventListener('click', function() {
    const bar = document.getElementById('cookieBar');
    if (bar) bar.style.display = 'none';
});

// Config button placeholder (puede abrir modal o ajustes)
document.getElementById('cookieConfig')?.addEventListener('click', function() {
    alert('Aquí se abrirían las opciones de configuración de cookies (placeholder).');
});
/* ==========================================================
   HERO SLIDER
   ========================================================== */

const slides = document.querySelectorAll(".hero-slide")
const dots = document.querySelectorAll(".dot")

let heroIndex = 0

function mostrarHero(i){

slides.forEach(slide=>{
slide.classList.remove("active")
})

dots.forEach(dot=>{
dot.classList.remove("active")
})

slides[i].classList.add("active")
dots[i].classList.add("active")

heroIndex = i
}

dots.forEach((dot,i)=>{
dot.addEventListener("click",()=>{
mostrarHero(i)
})
})

setInterval(()=>{
heroIndex++

if(heroIndex >= slides.length){
heroIndex = 0
}

mostrarHero(heroIndex)

},5000)