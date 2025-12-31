const abrir = document.getElementById("Abrir");
const cerrar = document.getElementById("Cerrar");
const contenedor = document.getElementById("AbrirContenedor");

function abrirCarta() {
    document.querySelector(".superior").classList.add("abrir-superior");
    document.querySelector(".mensaje").classList.add("abrir-mensaje");
    document.querySelector(".bx").classList.add("bx-rotada");

    setTimeout(() => {
        document.querySelector(".superior").style.zIndex = 0;
    }, 600);
}

function cerrarCarta() {
    document.querySelector(".mensaje").classList.remove("abrir-mensaje");
    document.querySelector(".superior").classList.remove("abrir-superior");
    document.querySelector(".bx").classList.remove("bx-rotada");
    document.querySelector(".superior").style.zIndex = 3;
}

abrir.addEventListener("click", abrirCarta);
cerrar.addEventListener("click", cerrarCarta);
contenedor.addEventListener("click", abrirCarta);
