function buscar() {
    let texto = document.getElementById("campoBusqueda").value;
    if (texto === "") {
        alert("Ingrese un producto para buscar");
        return;
    }
    let productos = document.querySelectorAll(".producto-card");
    productos.forEach(function(producto) {
        let nombre = producto.querySelector(".producto-nombre").textContent.toLowerCase();
        if (nombre.includes(texto.toLowerCase())) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }
    });
}
